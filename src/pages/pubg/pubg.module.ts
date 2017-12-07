import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PubgPage } from './pubg';

@NgModule({
  declarations: [
    PubgPage,
  ],
  imports: [
    IonicPageModule.forChild(PubgPage),
  ],
})
export class PubgPageModule {}
