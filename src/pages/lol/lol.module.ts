import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LolPage } from './lol';

@NgModule({
  declarations: [
    LolPage,
  ],
  imports: [
    IonicPageModule.forChild(LolPage),
  ],
})
export class LolPageModule {}
