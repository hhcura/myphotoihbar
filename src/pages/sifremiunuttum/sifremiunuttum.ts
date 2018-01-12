import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GirisPage } from '../giris/giris';
import { Sifremiunuttum2Page } from '../sifremiunuttum2/sifremiunuttum2';

/**
 * Generated class for the SifremiunuttumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sifremiunuttum',
  templateUrl: 'sifremiunuttum.html',
})
export class SifremiunuttumPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SifremiunuttumPage');
   
  }

  ionViewDidLeave() {
   // this.navCtrl.popToRoot();
  }

  open(){
    this.navCtrl.push(Sifremiunuttum2Page);
  }

}
