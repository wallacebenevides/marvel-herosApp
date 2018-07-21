import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HeroProvider } from '../../providers/hero/hero';
import { Camera, DestinationType } from '@ionic-native/camera';


@IonicPage()
@Component({
  selector: 'page-hero-list',
  templateUrl: 'hero-list.html',
})
export class HeroListPage {

  heros
  avatar: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private heroProvider: HeroProvider,
    public alertCtrl: AlertController,
    public camera: Camera
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

  filterItems(ev: any) {

    console.log(ev)
    this.ionViewDidLoad();

    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.heros = this.heros.filter(function (hero) {
        return hero.name.toLowerCase().includes(val.toLowerCase());
      });
    }
  }

  takePicture($event) {
    this.camera.getPicture({
      allowEdit: true,
      cameraDirection: 1,
      correctOrientation: true,
      destinationType: DestinationType.DATA_URL,
      targetHeight: 90,
      targetWidth: 90
    })
    .then(data => {
      this.avatar = 'data:image/jpg;base64,' + data;
    })

  }

}