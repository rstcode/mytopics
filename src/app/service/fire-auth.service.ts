import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { SpinnerService } from '../components/spinner/spinner.service';
import { User } from '../models/entities';

// https://angularfirebase.com/lessons/google-user-auth-with-firestore-custom-data/
@Injectable({ providedIn: 'root' })
export class FireAuthService {
  user: Observable<User>;
  currentUser: User = null;
  redirectUrl = '';
  private loginBS = new BehaviorSubject<boolean>(false);
  loginStatus = this.loginBS.asObservable();
  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router, private loader: SpinnerService) {
    //// Get auth data, then get firestore user document || null
    // this.user = this.afAuth.authState.pipe(
    //   switchMap(user => {
    //     if (user) {
    //       return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
    //     } else {
    //       return of(null);
    //     }
    //   })
    // );
  }
  googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }
  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {

        this.updateUserData(credential);
      });
  }
  private updateUserData(user) {
    // Sets user data to firestore on login
    // const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.additionalUserInfo.profile.id}`);
    this.currentUser = {
      uid: user.additionalUserInfo.profile.id,
      email: user.additionalUserInfo.profile.email,
      displayName: user.additionalUserInfo.profile.name,
      photoURL: user.additionalUserInfo.profile.picture
    };
    localStorage.setItem('userData', JSON.stringify(this.currentUser));
    this.loginBS.next(true);
    this.loader.hide();
    if (this.redirectUrl != null && this.redirectUrl !== '') {
      this.router.navigateByUrl(this.redirectUrl);
      this.redirectUrl = null;
    } else {
      this.router.navigate(['/home']);
    }
    // return userRef.set(data, { merge: true });
  }
  isAuthenticated() {
    this.currentUser = JSON.parse(localStorage.getItem('userData'));
    if (this.currentUser !== null && this.currentUser.uid) {
      return true;
    }
    return false;
  }
  initialLoginCheck() {
    if (this.isAuthenticated()) {
      this.loginBS.next(true);
    }
  }
  getCurrentUserId() {
    this.currentUser = JSON.parse(localStorage.getItem('userData'));
    if (this.currentUser !== null && this.currentUser.uid) {
      return this.currentUser.uid;
    }
    return 0;
  }
  signOut() {
    localStorage.clear();
    this.currentUser = null;
    this.redirectUrl = null;
    this.loginBS.next(false);
    this.router.navigate(['/login']);
    this.afAuth.auth.signOut().then(() => { });
  }
}
