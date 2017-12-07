import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth-services';

/**
 * Generated class for the ResetpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resetpassword',
  templateUrl: 'resetpassword.html',
})
export class ResetpasswordPage {
  userEmail: string= '';
  @ViewChild('form') form: NgForm;

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private authService: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetpasswordPage');
  }

  resetPassword(){
    if(this.form.form.valid){
      let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });

      this.authService.resetPassword(this.userEmail)
      .then(() =>{
        toast.setMessage('Solicitação foi enviada para seu e-mail')
        toast.present();

        this.navCtrl.pop();
      })
      .catch((error: any) => {
        if(error.code === 'auth/invaild-email'){
          toast.setMessage('E-mail digitado não é válido');
        }else if(error.code === 'auth-user-not-foun'){
          toast.setMessage('Usuário não encontrado.');
        }
      })
    }
  }
}
