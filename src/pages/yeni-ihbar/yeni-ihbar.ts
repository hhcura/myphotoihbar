import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from "@ionic-native/camera";
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
  public photos: any;
  public base64Image: string;
  public fileImage: string;
  public responseData: any;
  constructor(public alerCtrl: AlertController,
    public navCtrl: NavController,
    private camera: Camera,
    private alertCtrl: AlertController,
  ) {
  }
//public alerCtrl: AlertController
//public navCtrl: NavController, public navParams: NavParams 
  ionViewDidLoad() {
    console.log('ionViewDidLoad YeniIhbarPage');
  }
  testRadioOpen: boolean;
  testRadioResult;
  getImage() {
    console.log("coming here");

    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 450,
      targetHeight: 450,
      saveToPhotoAlbum: false
    };

    this.camera.getPicture(options).then(
      imageData => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photos.push(this.base64Image);
        this.photos.reverse();
       // this.sendData(imageData);
      },
      err => {
        console.log(err);
      }
    );
  }



}