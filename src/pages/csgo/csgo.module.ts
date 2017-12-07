import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CsgoPage } from './csgo';

@NgModule({
  declarations: [
    CsgoPage,
  ],
  imports: [
    IonicPageModule.forChild(CsgoPage),
  ],
})
export class CsgoPageModule {}
