import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangepassPage } from './changepass';

@NgModule({
  declarations: [
    ChangepassPage,
  ],
  imports: [
    IonicPageModule.forChild(ChangepassPage),
  ],
  exports: [
    ChangepassPage
  ]
})
export class ChangepassPageModule {}
