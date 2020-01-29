import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FireBaseService } from 'src/app/service/firebase.service';
import { TopicType, FormEntity, ControlEntity, InputTypesEnum } from '../../models/entities';
import { FireAuthService } from 'src/app/service/fire-auth.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/service/shared.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  // @Output() sliderEmit = new EventEmitter<boolean>();
  topicTypes = [];
  sharedtopicTypes = [];
  currentTT = '';
  titile = '';
  sliderFlag: boolean = false;
  sharedTopicsView = false;
  popupData: { formEntity: FormEntity, popupDisplay: string };
  constructor(private router: Router, private firebaseService: FireBaseService, private auth: FireAuthService, public sharedsvc: SharedService, private toastr: ToastrService) { }
  ngOnInit() {
    this.popupData = { popupDisplay: 'none', formEntity: null };
    this.sharedsvc.slider.subscribe((p: any) => { this.sliderFlag = p; });
    this.sharedsvc.titleText.subscribe(p => {
      this.currentTT = p;
      //console.log('ctt', this.currentTT);
    });
    this.auth.loginStatus.subscribe(p => {
      if (!(p as boolean)) {
        this.topicTypes = null;
        this.titile = '';
      } else if (p as boolean) {
        this.topicTypes = null;
        this.loadTopicTypes();
        this.titile = this.auth.currentUser.displayName;
      }
    });

  }
  navigateToHome() {
    this.sharedsvc.sliderClose();
    this.router.navigate(['home']);
  }
  navigateTo(topicType: TopicType, sharedtopic: boolean = false) {
    this.sharedsvc.sliderClose();
    if (sharedtopic)
      this.router.navigate(['topic/', 'rst', topicType.Type]);
    else
      this.router.navigate(['topic/', topicType.Type]);
  }
  loadTopicTypes() {
    this.loadSharedTopicTypes();
    this.firebaseService.getTopicTypes(this.auth.currentUser.uid).subscribe(data => {
      this.topicTypes = [];
      //console.log('types', data);
      if (data != null && data.length > 0) {
        data.forEach(item => {
          // tslint:disable-next-line:prefer-const
          let a = item.payload.toJSON();
          // tslint:disable-next-line:no-string-literal
          a['$key'] = item.key;
          this.topicTypes.push(a as TopicType);
        });
        this.topicTypes = this.topicTypes.slice();
        if (this.topicTypes.length > 0)
          this.firebaseService.loadOffLinetypes(this.topicTypes);
      }
    }, er => {
      //console.log('topictypes error', er);
      this.toastr.error('failed');
    });
  }

  loadSharedTopicTypes() {
    this.firebaseService.getTopicTypes(this.sharedsvc.sharedUid).subscribe(data => {
      this.sharedtopicTypes = [];
      //console.log('types', data);
      if (data != null && data.length > 0) {
        data.forEach(item => {
          // tslint:disable-next-line:prefer-const
          let a = item.payload.toJSON();
          // tslint:disable-next-line:no-string-literal
          a['$key'] = item.key;
          this.sharedtopicTypes.push(a as TopicType);
        });
        this.sharedtopicTypes = this.sharedtopicTypes.slice();
      }
    }, er => {
      //console.log('topictypes error', er);
      this.toastr.error('failed to sahred topictypes');
    });
  }

  addTopicTypePopup() {
    if (!this.auth.isAuthenticated()) {
      this.toastr.info('Please login..!');
      this.sharedsvc.sliderClose();
    } else {
      this.addPopup()
    }
  }

  addPopup() {
    const topicType = new TopicType();
    topicType.Type = '';
    this.popupData.formEntity = this.getFormEntityForTopicType(topicType, 'Add');
    this.popupData.formEntity.submitCallBack = (formEntity: FormEntity) => {
      /* after form submit */
      topicType.Type = formEntity.formControls[0].val;
      let uid = this.auth.currentUser.uid;
      if (formEntity.formControls[1].val === true)
        uid = this.sharedsvc.sharedUid;
      this.firebaseService.addTopicType(topicType, uid).then(p => {
        topicType.$key = p.key;
        this.popupData.popupDisplay = 'none';
        if (uid != this.sharedsvc.sharedUid)
          this.firebaseService.saveOffLinetypes(topicType);

        this.firebaseService.insertTypekeyInPosts(uid, p.key, topicType.Type).then(q => {
          this.toastr.success('successfully added');
          //this.topicTypes = this.topicTypes.slice();
          this.navigateTo(topicType);
        });
      }, er => {

      });
    }
    this.popupData.popupDisplay = 'block';
  }

  getFormEntityForTopicType(topicType: TopicType, action: string) {
    const formEntity: FormEntity = new FormEntity();
    formEntity.title = action + ' topic type';
    formEntity.isSubmitBtn = true;
    formEntity.formControls = this.getFormControlsForTopicType(topicType);
    return formEntity;
  }
  getFormControlsForTopicType(data: TopicType): ControlEntity[] {
    return [
      { name: 'Type', lableName: 'Type', val: data.Type, inputType: InputTypesEnum.text, order: 1, required: true },
      { name: 'shared', lableName: 'Make it shared', val: data.shared, inputType: InputTypesEnum.checkbox, order: 2 }
    ];
  }
  popupDisplayEvent(event: any) {
    this.popupData.popupDisplay = event;
    this.sharedsvc.sliderClose();
  }
}