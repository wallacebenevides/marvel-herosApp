import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-hero-detail',
  templateUrl: 'hero-detail.html',
})
export class HeroDetailPage {

  hero: any;
  content = 'series'

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.hero = this.navParams.data.hero;
  }

}
