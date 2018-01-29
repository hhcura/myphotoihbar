import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnasayfaPage } from '../anasayfa/anasayfa';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import { LoadingController, ToastController } from 'ionic-angular';
/**
 * Generated class for the KayitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kayit',
  templateUrl: 'kayit.html',
})
export class KayitPage {
    loading: any;
    regData = { Ad:'',Soyad:'', Sifre:'',Email:'',Telefon:'' };
  
    constructor(public navCtrl: NavController, public navParams: NavParams,
         public authService: RemoteServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {}


         doSignup() {
            this.showLoader();
            this.authService.register(this.regData).then((result) => {
              this.loading.dismiss();
              this.navCtrl.pop();
            }, (err) => {
              this.loading.dismiss();
              this.presentToast(err);
            });
          }
          showLoader(){
            this.loading = this.loadingCtrl.create({
                content: 'Authenticating...'
            });
        
            this.loading.present();
          }
         presentToast(msg) {
            let toast = this.toastCtrl.create({
              message: msg,
              duration: 3000,
              position: 'bottom',
              dismissOnPageChange: true
            });
        
            toast.onDidDismiss(() => {
              console.log('Dismissed toast');
            });
        
            toast.present();
          }
        

  tabb(){
    let elements = document.querySelectorAll(".tabbar");
   if (elements != null) {
       Object.keys(elements).map((key) => {
           elements[key].style.display = 'flex';
       });
   }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KayitPage');
    let elements = document.querySelectorAll(".tabbar");

   if (elements != null) {
       Object.keys(elements).map((key) => {
           elements[key].style.display = 'none';
       });
   }
  }

  ionViewDidLeave() {
    this.navCtrl.popToRoot();
      }
      //kayit2(){
          
     // }

}
