import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

import { HomePage } from '../pages/home/home';
import { ArtistasPage } from '../pages/artistas/artistas';
import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('NAV') nav: Nav;
  rootPage:any = LoginPage;
  public pages: Array<{titulo: string, component: any, icon:string }>;


  // constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private admobFree: AdMobFree) {
      
    this.pages = [
      {titulo: 'Home',       component: HomePage,    icon: 'home'},
      {titulo: 'Canais',       component: ArtistasPage,    icon: 'ios-people'},
      {titulo: 'Sign Out',   component: LoginPage, icon:'log-out'}, 
    ];
    platform.ready().then(() => {
      
      const bannerConfig: AdMobFreeBannerConfig = {
        id: 'ca-app-pub-8091560494346721/3575261702',
        size: 'SMART_BANNER',
        isTesting: true,
        autoShow: true
       };  
      this.admobFree.banner.config(bannerConfig);
      this.admobFree.banner.prepare()
      .then(() => {
        // admobFree.banner.show();
      })
      .catch(e => console.log(e));

      statusBar.styleDefault();
      splashScreen.hide();


    });
  }
  
  openPage(page){
    // console.log(page);
    this.nav.setRoot(page);
  }
}


 
 

