import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
    email:any;
    password:any;
    constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthServiceProvider) {

    }

    ionViewDidLoad(){
        console.log('ionViewDidLoad LoginPage');
    }
     
    login(){
        this.authService.signInWithEmail(this.email,this.password).then(
      (success) => {
        console.log(success);
        this.onSignInSuccess();
      }).catch(
      (err) => {
        console.log(err);
      });
    }

    private onSignInSuccess(): void {
        window.localStorage.setItem('currentUser',this.authService.displayName());
        this.navCtrl.pop();
        console.log("Facebook display name ",this.authService.displayName());
  }
}