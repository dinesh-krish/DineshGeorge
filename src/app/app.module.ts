import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import{SignaturePadModule} from "angular2-signaturepad";
import {IonicStorageModule} from "@ionic/storage";
import {SudokuPage} from "../pages/sudoku/sudoku";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SudokuPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      SignaturePadModule,
      IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SudokuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
