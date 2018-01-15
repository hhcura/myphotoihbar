import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the YeniIhbarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-yeni-ihbar',
  templateUrl: 'yeni-ihbar.html',
})
export class YeniIhbarPage {

  constructor(public alerCtrl: AlertController) {
  }
//public alerCtrl: AlertController
//public navCtrl: NavController, public navParams: NavParams 
  ionViewDidLoad() {
    console.log('ionViewDidLoad YeniIhbarPage');
  }
  testRadioOpen: boolean;
  testRadioResult;


  doRadio() {
    let alert = this.alerCtrl.create();
    alert.setTitle('İhbar Türü');

    alert.addInput({
      type: 'radio',
      label: 'Yanlış Park',
      value: 'yanlıspark',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Kazı Çalışması',
      value: 'kazıcalısması'
    });

    alert.addInput({
      type: 'radio',
      label: 'Hatalı Tabela',
      value: 'hatalıtabela'
    });

    alert.addInput({
      type: 'radio',
      label: 'Işık İhlali',
      value: 'isikihlali'
    });

    alert.addInput({
      type: 'radio',
      label: 'Orman Yangını',
      value: 'ormanyangını'
    });

    alert.addInput({
      type: 'radio',
      label: 'Diğer',
      value: 'diger'
    });
    alert.addButton('İptal');
    alert.addButton({
      text: 'Tamam',
      handler: data => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });
}
}