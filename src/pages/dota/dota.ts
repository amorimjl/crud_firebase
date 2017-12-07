import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ContactProvider } from './../../providers/contact/contact';
import {  Observable  } from 'rxjs/Observable';
import {  FormGroup} from '@angular/forms';

/**
/**
 * Generated class for the DotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-dota',
  templateUrl: 'dota.html',
})
export class DotaPage {
  contacts: Observable<any>; 
  item = {name};
  PATH = "contacts"
  busca: FormGroup;
  constructor(
    public navCtrl: NavController, private provider: ContactProvider, 
    private toast: ToastController) {
    
      this.contacts = this.provider.getGame('Dota 2');     
      
  }

  valorForm(){
    if(this.item.name == "" || this.item.name == " "){
      this.contacts = this.provider.getGame('Dota 2');    
    }else{
      this.contacts = this.provider.getStreamer(this.item.name)
    }    
  }
  
  newContact(){
    this.navCtrl.push('ContactPage');
  }

  openPage(){
    this.navCtrl.push('ArtistasPage');
  }

  editContact(contact: any){
    this.navCtrl.push('ContactPage', {contact: contact});
  }

  removeContact(key: string){
    this.provider.remove(key)
    .then(() =>{
      this.toast.create({message: 'Contato removido com sucesso', duration: 3000}).present;
    })
    .catch((e) => {
      this.toast.create({message: 'Erro ao remover o contato', duration: 3000}).present;
    })
  }

}


