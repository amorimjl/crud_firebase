import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { ImagePicker } from '@ionic-native/image-picker';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ArtistasPage } from '../pages/artistas/artistas';
import { LoginPage } from '../pages/login/login';
import { ResetpasswordPage } from '../pages/resetpassword/resetpassword';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { LolPage } from '../pages/lol/lol';
import { CsgoPage } from '../pages/csgo/csgo';
import { PubgPage } from '../pages/pubg/pubg';
import { FifaPage } from '../pages/fifa/fifa';
import { DotaPage } from '../pages/dota/dota';

import { ContactProvider } from '../providers/contact/contact';
import { ArtistasProvider } from '../providers/artistas/artistas';
import {  AuthService } from '../providers/auth/auth-services';

@NgModule({
  declarations: [
    MyApp,     
    HomePage,
    ArtistasPage,
    LoginPage,
    ResetpasswordPage,
    SigninPage,
    SignupPage,
    LolPage,
    CsgoPage,
    PubgPage,
    FifaPage,
    DotaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
    apiKey: "AIzaSyBFpT8TaMTrXxgQNg7x2VhtWkzVEXFmP2I",
    authDomain: "crud-73e19.firebaseapp.com",
    databaseURL: "https://crud-73e19.firebaseio.com",
    projectId: "crud-73e19",
    storageBucket: "crud-73e19.appspot.com",
    messagingSenderId: "503006636114"}),    
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ArtistasPage,
    LoginPage,
    ResetpasswordPage,
    SigninPage,
    SignupPage,
    LolPage,
    CsgoPage,
    PubgPage,
    FifaPage,
    DotaPage
  ],
  providers: [
    StatusBar,
    AdMobFree,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactProvider,
    ArtistasProvider,
    AuthService,
    ImagePicker
  ]
})
export class AppModule {}
