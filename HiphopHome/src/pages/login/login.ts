import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AlertController } from 'ionic-angular';
import { PopupProvider } from '../../providers/popup/popup'
import { RegisterPage } from '../register/register'; 

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
    email:any;
    password:any;
    constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthServiceProvider, private alertCtrl: AlertController, private popup:PopupProvider) {

    }

    ionViewDidLoad(){
        console.log('ionViewDidLoad LoginPage');
    }
     
    loginEmail(){
        if(this.email != null && this.password != null){
            this.authService.signInWithEmail(this.email,this.password).then(
            (success) => {
                this.onSignInSuccess();
            }).catch(
            (err) => {
                this.popup.presentAlert(err.name, err.message);
            });
        }else{
            this.popup.presentAlert('Champ manquant', 'Veuillez remplir tous les champs!');
        }
        
    }

    loginFacebook(){
        this.authService.signInWithFacebook().then(
      (success) => {
        this.onSignInSuccess();
      }).catch(
      (err) => {
        this.popup.presentAlert(err.name, err.message);
      });
    }

    loginGoogle(){
        this.authService.signInWithGoogle().then(
      (success) => {
        this.onSignInSuccess();
      }).catch(
      (err) => {
        this.popup.presentAlert(err.name, err.message);
      });
    }

    goToResetPassword(){
        this.popup.presentPromptPasswordForget('Reset password', 'Enter your email');
    }

    gotToRegister(){
        this.navCtrl.push(RegisterPage);
    }

    private onSignInSuccess(): void {
        window.localStorage.setItem('currentUser',this.authService.displayName());
        this.navCtrl.pop();
  }
}