import { Component, ViewEncapsulation, ElementRef } from '@angular/core';
import { TopicService } from './service/topic.service';
import { TopicType } from './models/entities';
import { FireAuthService } from './service/fire-auth.service';
import { SharedService } from './service/shared.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  overlayFlag = false;
  fullScreenMode = false;
  constructor(private auth: FireAuthService, public sharedsvc: SharedService, public location: Location,private elementRef: ElementRef) { }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.auth.initialLoginCheck();
    this.sharedsvc.overlay.subscribe((p: any) => { this.overlayFlag = p; });

    this.auth.loginStatus.subscribe(flag => {
      if (!(flag as boolean)) {
        // this.sliderFlag = false;
      }
    });
  }

  checkIsLogin(): boolean {
    return this.auth.isAuthenticated();
  }
   
  fullscreen() {

    let elem = document.documentElement;

    if (!this.fullScreenMode && elem.requestFullscreen) {
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#040404';
      this.sharedsvc.toggelFullScreen(true);
      elem.requestFullscreen();
    }

    if (this.fullScreenMode && document.exitFullscreen) {
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'white';
      this.sharedsvc.toggelFullScreen(false);
      document.exitFullscreen();
    }
    this.fullScreenMode = !this.fullScreenMode;
  }

}