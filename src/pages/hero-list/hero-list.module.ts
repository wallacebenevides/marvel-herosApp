import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeroListPage } from './hero-list';
import { HeroProvider } from '../../providers/hero/hero';
import { Camera } from '@ionic-native/camera'

@NgModule({
  declarations: [
    HeroListPage,
  ],
  imports: [
    IonicPageModule.forChild(HeroListPage),
  ],
  providers: [HeroProvider, Camera]
})
export class HeroListPageModule { }
