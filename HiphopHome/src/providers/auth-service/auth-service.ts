import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
  private currentUser: firebase.User;

  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe((user: firebase.User) => this.currentUser = user);
  }

  get authenticated(): boolean {
    return this.currentUser !== null;
  }
  
  signInWithEmail(email:string , password:string): firebase.Promise<any>{
    return this.afAuth.auth.signInWithEmailAndPassword(email,password);
  }

  registerInWithEmail(email:string , password:string): firebase.Promise<any>{
    return this.afAuth.auth.createUserWithEmailAndPassword(email,password);
  }

  resetPassword(email: string): firebase.Promise<any> {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  signInWithFacebook(): firebase.Promise<any> {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  signInWithGoogle(): firebase.Promise<any> {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  signOut(): void {
    this.afAuth.auth.signOut();
  }

  displayName(): string {
    if (this.currentUser !== null) {
      return this.currentUser.email;
    } else {
      return '';
    }
  }

}
