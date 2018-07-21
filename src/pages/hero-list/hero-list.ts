import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HeroProvider } from '../../providers/hero/hero';
import { text } from '@angular/core/src/render3/instructions';

@IonicPage()
@Component({
  selector: 'page-hero-list',
  templateUrl: 'hero-list.html',
})
export class HeroListPage {

  heros

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private heroProvider: HeroProvider,
    public alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {

    this.heroProvider.getHeros()
      .subscribe((heros) => {
        this.heros = heros;
      },
        error => {
          let alert = this.alertCtrl.create({ message: error.message, title: "Error", buttons: [{ text: "Ok" }] });
          alert.present();
        }
      );
  }

  goToDetail(hero) {
    this.navCtrl.push("HeroDetailPage", { hero })
  }

}
