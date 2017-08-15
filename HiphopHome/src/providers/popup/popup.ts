import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';
import { AuthServiceProvider} from '../auth-service/auth-service'

/*
  Generated class for the PopupProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PopupProvider {

  constructor(public http: Http, private alertCtrl:AlertController, private authService : AuthServiceProvider) {
    console.log('Hello PopupProvider Provider');
  }

  presentAlert(title:string, message:string) {
  let alert = this.alertCtrl.create({
    title: title,
    subTitle: message,
    buttons: ['Dismiss']
  });
  alert.present();
}

presentConfirm(title:string, message:string) {
  let alert = this.alertCtrl.create({
    title: title,
    message: message,
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Buy',
        handler: () => {
          console.log('Buy clicked');
        }
      }
    ]
  });
  alert.present();
}

presentPromptPasswordForget(title:string, message:string) {
  let alert = this.alertCtrl.create({
    title: title,
    message: message,
    inputs: [
      {
        name: 'email',
        placeholder: 'Email'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {
          this.authService.resetPassword(data.email).then(
          (success) => {
            this.presentAlert('Succès','Mail is sended');
          }).catch(
          (err) => {
            this.presentAlert(err.name, err.message);
          });
        }
      }
    ]
  });
  alert.present();
}

}
