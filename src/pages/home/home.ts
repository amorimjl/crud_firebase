import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ContactProvider } from './../../providers/contact/contact';
import {  Observable  } from 'rxjs/Observable';
// import { ArtistasPage } from '../../pages/artistas/artistas';
import { LolPage } from '../../pages/lol/lol';
import { CsgoPage } from '../../pages/csgo/csgo';
import { FifaPage } from '../../pages/fifa/fifa';
import { DotaPage } from '../../pages/dota/dota';
import { PubgPage } from '../../pages/pubg/pubg';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
contacts: Observable<any>; 
component: any;
  constructor(
    public navCtrl: NavController, private provider: ContactProvider, 
    private toast: ToastController) {
    
      // this.contacts = this.provider.getAll();
  }

  newContact(){
    this.navCtrl.push('ContactPage');
  }

  goLol(){
    this.navCtrl.setRoot(LolPage);
    
  }

  goCS(){
    this.navCtrl.setRoot(CsgoPage);
  }

  goFifa(){
    this.navCtrl.setRoot(FifaPage);
  }

  goDota(){
    this.navCtrl.setRoot(DotaPage);
  }

  goPubg(){
    this.navCtrl.setRoot(PubgPage);
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
