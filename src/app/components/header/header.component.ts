import { Component, OnInit } from '@angular/core';
import { FireAuthService } from 'src/app/service/fire-auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/service/shared.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  IsLogin = false;
  title = 'My Topics';
  showFlag:boolean =false;
  fullScreen: boolean =false;
  constructor(private route: ActivatedRoute, private router: Router, private auth: FireAuthService, public sharedsvc: SharedService) { }
  ngOnInit() {
    this.sharedsvc.titleText.subscribe(p => this.title = p );
    this.sharedsvc.fullScreen.subscribe(p => this.fullScreen = p );
    this.auth.loginStatus.subscribe(p => {
      this.IsLogin = (p as boolean);
      if(!this.IsLogin){
        this.title= "My Topics";
      }
    });
  }
  login() {
    this.auth.googleLogin();
  }
  logOut() {
    this.auth.signOut();
  }
}