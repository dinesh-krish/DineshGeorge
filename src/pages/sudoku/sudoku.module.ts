import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SudokuPage } from './sudoku';

@NgModule({
  declarations: [
    SudokuPage,
  ],
  imports: [
    IonicPageModule.forChild(SudokuPage),
  ],
})
export class SudokuPageModule {}
