import { Component, OnInit, HostListener } from '@angular/core';
import { TopicType, FormEntity, ControlEntity, InputTypesEnum } from '../../models/entities';
import { ActivatedRoute, Router } from '@angular/router';
import { FireBaseService } from 'src/app/service/firebase.service';
import { FireAuthService } from 'src/app/service/fire-auth.service';
import { SharedService } from 'src/app/service/shared.service';
import { ToastrService } from 'ngx-toastr';
import { SpinnerService } from '../spinner/spinner.service';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  topicTypes = null;
  userName: string = 'Guest';
  popupData: { formEntity: FormEntity, popupDisplay: string };
  fullScreen = false;
  // tslint:disable-next-line:max-line-length
  constructor(private firebaseService: FireBaseService, private route: ActivatedRoute, private router: Router, private auth: FireAuthService, public sharedsvc: SharedService, private toastr: ToastrService, private loader: SpinnerService) { }
  ngOnInit() {
    this.popupData = { popupDisplay: 'none', formEntity: null };
    this.sharedsvc.changeTitleBS('My Topics');
    this.sharedsvc.fullScreen.subscribe(p => this.fullScreen = p);
    if (this.auth.isAuthenticated()) {
      this.userName = this.auth.currentUser.displayName;
      this.loadTopicTypes();
    }
  }
  logIn() {
    this.auth.googleLogin();
  }
  logOut() {
    this.auth.signOut();
  }

  loadTopicTypes() {
    this.firebaseService.getTopicTypes(this.auth.currentUser).subscribe(data => {
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
        if (this.topicTypes.length > 0) {
          this.topicTypes = this.topicTypes.sort(this.sort).slice();
          this.firebaseService.loadOffLinetypes(this.topicTypes);
        }
      }
    }, er => {
      //console.log('topictypes error', er);
      this.toastr.error('failed');
    });
  }

  sort(a: any, b: any) {
    // ASC  -> a.length - b.length
    // DESC -> b.length - a.length
    return a.Type.length - b.Type.length;
  }

  edit(topicType: TopicType) {
    let ntt = new TopicType();
    ntt.Type = topicType.Type;
    //topicType.Type = '';
    this.sharedsvc.overlayOpen();
    this.popupData.popupDisplay = 'block';
    this.popupData.formEntity = this.getFormEntityForTopicType(topicType, 'Edit');
    this.popupData.formEntity.submitCallBack = (formEntity: FormEntity) => {
      this.loader.show();
      topicType.Type = formEntity.formControls[0].val;
      //console.log('submit add topic type event');
      this.firebaseService.updateTopicType(topicType, this.auth.currentUser.uid).then(p => {
        //topicType.$key = p.key;
        //console.log(p.key);
        this.popupData.popupDisplay = 'none';
        //this.firebaseService.saveOffLinetypes(topicType);
        this.toastr.success('successfully updated');
        this.loader.hide();
        this.sharedsvc.overlayClose();
      }, er => {
        this.sharedsvc.overlayClose();
        this.loader.hide();
      });
    };
  }

  delete(type: TopicType) {
    const confirmValue = confirm('Are you sure..?');
    if (confirmValue) {
      this.loader.show();
      this.firebaseService.deleteTopicType(type.$key, this.auth.currentUser.uid).then(p => {
        this.loader.hide();
        this.toastr.success('Deleted.');
      }).catch(er => {
        this.loader.hide();
        this.toastr.error('Failed');
      });
    }
  }

  navigateTo(topicType: TopicType) {
    this.sharedsvc.sliderClose();
    this.router.navigate(['topic/', topicType.Type]);
  }

  addTopicTypePopup() {
    const topicType = new TopicType();
    topicType.Type = '';
    this.sharedsvc.overlayOpen();
    this.popupData.popupDisplay = 'block';
    this.popupData.formEntity = this.getFormEntityForTopicType(topicType, 'Add');
    this.popupData.formEntity.submitCallBack = (formEntity: FormEntity) => {
      this.loader.show();
      topicType.Type = formEntity.formControls[0].val;
      //console.log('submit add topic type event');
      this.firebaseService.addTopicType(topicType, this.auth.currentUser.uid).then(p => {
        topicType.$key = p.key;
        //console.log(p.key);
        this.popupData.popupDisplay = 'none';
        this.firebaseService.saveOffLinetypes(topicType);
        this.firebaseService.insertTypekeyInPosts(this.auth.currentUser.uid, p.key, topicType.Type).then(q => {
          this.toastr.success('successfully added');
          this.loader.hide();
          this.sharedsvc.overlayClose();
          this.navigateTo(topicType);
        });
      }, er => {
        this.sharedsvc.overlayClose();
        this.loader.hide();
      });
    };
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
      { name: 'Type', lableName: 'Type', val: data.Type, inputType: InputTypesEnum.text, order: 1, required: true }
    ];
  }
  popupDisplayEvent(event: any) {
    this.popupData.popupDisplay = 'none';
    this.sharedsvc.overlayClose();
  }
}