import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
import {SudokuPage} from "../sudoku/sudoku";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    player;

  constructor(public navCtrl: NavController, public storage: Storage, public toastCtrl: ToastController) {}


  StartGame(){
    if(!this.player){
      this.snackBar('Enter Your Name First');
      return
    }

    this.navCtrl.push(SudokuPage,{playerName:this.player});
  }

  snackBar(msg){
   let msgBar = this.toastCtrl.create({
      message:msg,
      duration:2000,

    });
    msgBar.present();
  }

}
