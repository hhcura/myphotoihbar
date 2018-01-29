import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AnasayfaPage } from '../anasayfa/anasayfa';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
//NavController,
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
  loading: any;
  loginData = { username:'', password:'' };
  data: any;

  constructor(public navCtrl: NavController, public authService: RemoteServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
  }
  doLogin() {
    this.showLoader();
    this.authService.login(this.loginData).then((result) => {
      this.loading.dismiss();
      this.data = result;
      localStorage.setItem('token', this.data.access_token);
      this.navCtrl.setRoot(TabsPage);
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
  }
  register() {
    this.navCtrl.push("KayitPage" );
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
