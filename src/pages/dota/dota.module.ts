import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DotaPage } from './dota';

@NgModule({
  declarations: [
    DotaPage,
  ],
  imports: [
    IonicPageModule.forChild(DotaPage),
  ],
})
export class DotaPageModule {}
