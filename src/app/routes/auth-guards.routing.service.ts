import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { FireAuthService } from '../service/fire-auth.service';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public auth: FireAuthService, public router: Router, private toaster: ToastrService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.isAuthenticated()) {
      return true;
    }

    this.toaster.info('Please login..');
    // not logged in so redirect to login page with the return url and return false    
    this.auth.redirectUrl = state.url;
    return false;
  }
}