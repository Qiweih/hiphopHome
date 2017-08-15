import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service'
import { PopupProvider } from '../../providers/popup/popup'

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  email:any;
  password:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private authService:AuthServiceProvider,  private popup:PopupProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(){
    this.authService.registerInWithEmail(this.email,this.password).then(
      (success) => {
          this.navCtrl.popToRoot();
      },
      (error) => {
          this.popup.presentAlert(error.name,error.message);
      }
    );
  }

}
