import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Topic, TopicType, FormEntity, ControlEntity, InputTypesEnum } from '../../models/entities';
import { FireBaseService } from 'src/app/service/firebase.service';
import { snapshotChanges } from '@angular/fire/database';
import { FireAuthService } from 'src/app/service/fire-auth.service';
import { SharedService } from 'src/app/service/shared.service';
import { SpinnerService } from '../spinner/spinner.service';
@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  topics: Topic[] = null;
  openAll = false;
  currentTT: string;
  noData = false;
  currentTTKey: string = null;
  popupData: { formEntity: FormEntity, popupDisplay: string };
  fullScreen = false;
  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private router: Router, private datepipe: DatePipe, private firebaseService: FireBaseService, private auth: FireAuthService, private toastr: ToastrService, public sharedsvc: SharedService, private loader: SpinnerService) { }
  ngOnInit() {
    this.popupData = { popupDisplay: 'none', formEntity: null };
    this.sharedsvc.fullScreen.subscribe(p => this.fullScreen = p);
    this.route.paramMap.subscribe(params => {
      this.currentTT = params.get('type');
      //console.log('ttype',this.currentTT);
      this.sharedsvc.changeTitleBS(this.currentTT);
      // tslint:disable-next-line:curly
      if (this.currentTT !== undefined && this.currentTT !== null)
        this.GetTopicTypeKey();
    });
  }
  GetTopicTypeKey() {
    // this.loader.show();
    this.currentTTKey = this.firebaseService.getOffLinetype(this.currentTT);
    if (this.currentTTKey === undefined || this.currentTTKey == null || this.currentTTKey == '') {
      this.firebaseService.getTopicTypes(this.auth.currentUser).subscribe(data => {
        // tslint:disable-next-line:prefer-const
        let topicTypes: TopicType[] = [];
        if (data != null && data.length > 0) {
          data.forEach(item => {
            // tslint:disable-next-line:prefer-const
            let a = item.payload.toJSON();
            // tslint:disable-next-line:no-string-literal
            a['$key'] = item.key;
            topicTypes.push(a as TopicType);
          });
          // this.topicTypes = this.topicTypes.slice();
          if (topicTypes.length > 0)
            this.firebaseService.loadOffLinetypes(topicTypes);
          this.currentTTKey = this.firebaseService.getOffLinetype(this.currentTT);
          this.LoadTopics();
          this.loader.hide();
        }
      }, er => {
        console.log(er);
        this.loader.hide();
      });
    } else {
      this.LoadTopics();
      this.loader.hide();
    }
  }

  LoadTopics() {
    this.firebaseService.getTopicsByType(this.currentTTKey, this.auth.currentUser.uid).subscribe(data => {
      if (data !== undefined && data !== null && data.length > 0) {
        this.topics = [];
        //console.log('topics', data);
        data.forEach(item => {
          // tslint:disable-next-line:prefer-const
          let a = item.payload.toJSON();
          // tslint:disable-next-line:no-string-literal
          if (item.key !== 'type') {
            a['$key'] = item.key;
            this.topics.push(a as Topic);
          }
        });
      }
    }, er => {
      if (er.error) { this.router.navigate(['/home']); }
    });
  }
  AddTopic() {
    //
    const topic = new Topic();
    topic.Header = '';
    topic.Description = '';
    this.sharedsvc.overlayOpen();
    this.popupData.formEntity = this.getFormEntityForTopic(topic, 'Add');
    this.popupData.formEntity.submitCallBack = (formEntity: FormEntity) => {
      this.loader.show();
      topic.Header = formEntity.formControls[0].val;
      topic.Description = formEntity.formControls[1].val;
      topic.TopicType = this.currentTTKey;
      //console.log('add submit event');
      this.firebaseService.addTopic(topic, this.currentTTKey, this.auth.currentUser).then(p => {
        this.loader.hide();
        this.toastr.success('successfully added');
        this.sharedsvc.overlayClose();
      }).catch(q => {
        this.loader.hide();
        this.sharedsvc.overlayClose();
        this.toastr.error('failed')
      });
    };
    this.popupData.popupDisplay = 'block';
  }
  EditTopic(topic: Topic) {
    this.sharedsvc.overlayOpen();
    this.popupData.formEntity = this.getFormEntityForTopic(topic, 'Edit');
    this.popupData.formEntity.submitCallBack = (formEntity: FormEntity) => {
      topic.Header = formEntity.formControls[0].val;
      topic.Description = formEntity.formControls[1].val;
      //console.log('edit submit event');
      this.firebaseService.updateTopic(topic, this.currentTTKey, this.auth.currentUser).then(p => {
        this.loader.hide();
        this.toastr.success('successfully updated');
        this.sharedsvc.overlayClose();
      }).catch(q => {
        this.loader.hide();
        this.sharedsvc.overlayClose();
        this.toastr.error('failed')
      });
    };
    this.popupData.popupDisplay = 'block';
  }
  DeleteTopic(topic: Topic) {
    const confirmValue = confirm('Are you sure..?');
    if (confirmValue) {
      this.loader.show();
      this.firebaseService.deleteTopic(topic.$key, this.currentTTKey, this.auth.currentUser.uid).then(p => {
        this.loader.hide();
        this.toastr.success('Deleted.');
      }).catch(er => {
        this.loader.hide();
        this.toastr.error('Failed');
      });
    }
  }
  getFormEntityForTopic(topic: Topic, title: string): FormEntity {
    const formEntity: FormEntity = new FormEntity();
    formEntity.title = title + ' topic';
    formEntity.isSubmitBtn = true;
    formEntity.formControls = this.getFormControlsForTopic(topic);
    return formEntity;
  }
  getFormControlsForTopic(data: Topic): ControlEntity[] {
    return [
      { name: 'Header', lableName: 'Header', val: data.Header, inputType: InputTypesEnum.text, order: 1, required: true },
      { name: 'Description', lableName: 'Description', val: data.Description, inputType: InputTypesEnum.textarea, rows: 8, required: true }
    ];
  }
  popupDisplayEvent(event: any) {
    this.popupData.popupDisplay = event;
    this.sharedsvc.overlayClose();
  }

  alert2() {
    alert('testttt');
  }
}