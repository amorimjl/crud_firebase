import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FifaPage } from './fifa';

@NgModule({
  declarations: [
    FifaPage,
  ],
  imports: [
    IonicPageModule.forChild(FifaPage),
  ],
})
export class FifaPageModule {}
