import { Component } from '@angular/core';
import { TopicService } from './service/topic.service';
import { TopicType } from './models/entities';
import { FireAuthService } from './service/fire-auth.service';
import { SharedService } from './service/shared.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  overlayFlag =false;
  constructor(private auth: FireAuthService, public sharedsvc: SharedService,public location: Location) { }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.auth.initialLoginCheck();    
    this.sharedsvc.overlay.subscribe((p:any) => {this.overlayFlag = p;});

    this.auth.loginStatus.subscribe(flag => {
      if (!(flag as boolean)) {
        // this.sliderFlag = false;
      }
    });
  }

  checkIsLogin(): boolean {
    return this.auth.isAuthenticated();
  }

}