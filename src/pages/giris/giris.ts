import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AnasayfaPage } from '../anasayfa/anasayfa';
/**
 * Generated class for the GirisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-giris',
  templateUrl: 'giris.html',
})
export class GirisPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GirisPage');
  }

  giris()
  {
   this.navCtrl.push(TabsPage);
  }

  kayit()
  {
   this.navCtrl.push("KayitPage");
  }

  sifremiunuttum()
  {
   this.navCtrl.push("SifremiunuttumPage");
  }



}
