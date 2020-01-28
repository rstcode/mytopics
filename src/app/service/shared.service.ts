import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private titleBS = new BehaviorSubject<string>('My title');
  titleText = this.titleBS.asObservable();

  private sliderBS = new BehaviorSubject<boolean>(false);
  private overlayBS = new BehaviorSubject<boolean>(false);
  private sliderStatus: boolean = false;
  slider = this.sliderBS.asObservable();
  overlay = this.overlayBS.asObservable();

  private fullScreenBS = new BehaviorSubject<boolean>(false);
  fullScreen = this.fullScreenBS.asObservable();
 
  constructor() { }
  changeTitleBS(title: string) {
    this.titleBS.next(title);
  }
  sliderClose() {
    this.sliderStatus = false;
    this.sliderBS.next(false);
    this.overlayBS.next(false);
  }
  sliderOpen() {
    this.sliderStatus = true;
    this.sliderBS.next(true);
    this.overlayBS.next(true);
  }
  overlayOpen() {
    this.overlayBS.next(true);
  }
  overlayClose() {
    this.overlayBS.next(false);
  }

  sliderToggle() {
    if (this.sliderStatus) {
      this.sliderClose();
    } else {
      this.sliderOpen();
    }
  }

  toggelFullScreen(val: boolean) {
    this.fullScreenBS.next(val);
  }

}