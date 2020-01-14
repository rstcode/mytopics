import { Component, OnInit } from '@angular/core';
import { FireAuthService } from 'src/app/service/fire-auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SpinnerService } from '../spinner/spinner.service';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  IsLogin = false;
  constructor(private auth: FireAuthService, private route: ActivatedRoute, private router: Router, private loader: SpinnerService) { }
  ngOnInit() {
    this.auth.loginStatus.subscribe(p => {
      this.IsLogin = (p as boolean);
    });
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/home']);
    }
  }
  login() {
    this.loader.show();
    this.auth.googleLogin();
  }
}
