import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SudokuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sudoku',
  templateUrl: 'sudoku.html',
})
export class SudokuPage {

    text: string;
    // rowOne = [9,0,0,0,0,0,0,2,0];
    rowOne = row1;
    rowTwo = row2;
    rowThree = row3;
    rowFour = row4;
    rowFive = row5;
    rowSix = row6;
    rowSeven = row7;
    rowEight = row8;
    rowNine = row9;
    finalArr = [[0,5,0,4,3,0,1,0,0],[1,2,4,0,0,9,0,0,0],];
    // rowTwo = [0,5,0,4,3,0,1,0,0];
    // rowThree = [1,2,4,0,0,9,0,0,0];

    // rowFour = [8,1,0,0,0,0,9,3,0];
    // rowFive = [0,0,0,9,2,8,0,0,0];
    // rowSix =  [0,9,5,0,0,0,0,8,4];
    //
    // rowSeven = [0,0,0,1,0,0,3,9,6];
    // rowEight = [0,0,9,0,8,6,0,4,0];
    // rowNine =  [0,3,0,0,0,0,0,0,5];
    // buttonRow = [1,2,3,4,5,6,7,8,9];
    isValid: false;
    newValue:any;
    constructor() {

    }
    isValidSudoku(index,num,from){
        console.log(index,from);
        switch (from) {
            case arrayFrom.One:
                console.log('isFrom'+ num);
                console.log('isFrom'+ from);
                let arr = this.rowOne.slice().sort();
                var results = [];
                for (var i = 0; i < arr.length - 1; i++) {

                    if (arr[i].value == arr[index].value) {
                        results.push(arr[i]);
                    }
                }

                console.log(results);
                // if(num == '') return;
                // for(let i=0;i<=8;i++ ) {
                //     if(i==index) i + 1;
                //     if(num == this.rowOne[i].value){
                //         this.isValid = false;
                //         return;
                //     }
                //
                // }
                break;
            case arrayFrom.Two:
                console.log('isFrom'+ num);
                console.log('isFrom'+ from);
                break;
            case arrayFrom.Three:
                console.log('isFrom'+ num);
                console.log('isFrom'+ from);
                break;
            case arrayFrom.Four:
                console.log('isFrom'+ num);
                console.log('isFrom'+ from);
                break;
            case arrayFrom.Five:
                console.log('isFrom'+ num);
                console.log('isFrom'+ from);
                break;
            case arrayFrom.Six:
                console.log('isFrom'+ num);
                console.log('isFrom'+ from);
                break;
            case arrayFrom.Seven:
                console.log('isFrom'+ num);
                console.log('isFrom'+ from);
                break;
            case arrayFrom.Eight:
                console.log('isFrom'+ num);
                console.log('isFrom'+ from);
                break;
            case arrayFrom.Nine:
                console.log('isFrom'+ num);
                console.log('isFrom'+ from);
                break;
        }
    }
    keyBoardEvent(numb){
        this.newValue = numb;
        console.log(numb);
    }

}
export enum arrayFrom{
    One = 'One',
    Two = 'Two',
    Three = 'Three',
    Four = 'Four',
    Five = 'Five',
    Six = 'Six',
    Seven = 'Seven',
    Eight = 'Eight',
    Nine = 'Nine',
    // Three = 'Three',


}
export interface PeriodicElement {
    key: number;
    value: string;
    // weight: number;
    // symbol: string;
}

const row1: PeriodicElement[] = [
    {key: 1, value: '9'},
    {key: 2, value: ''},
    {key: 3, value: ''},

    {key: 4, value: ''},
    {key: 5, value: ''},
    {key: 6, value: ''},

    {key: 7, value: ''},
    {key: 8, value: '2'},
    {key: 9, value: ''},
];
const row2: PeriodicElement[] = [
    {key: 1, value: ''},
    {key: 2, value: '5'},
    {key: 3, value: ''},

    {key: 4, value: '4'},
    {key: 5, value: '3'},
    {key: 6, value: ''},

    {key: 7, value: '1'},
    {key: 8, value: ''},
    {key: 9, value: ''},
];
const row3: PeriodicElement[] = [
    {key: 1, value: '1'},
    {key: 2, value: '2'},
    {key: 3, value: '4'},

    {key: 4, value: ''},
    {key: 5, value: ''},
    {key: 6, value: '9'},

    {key: 7, value: ''},
    {key: 8, value: ''},
    {key: 9, value: ''},
];
const row4: PeriodicElement[] = [
    {key: 1, value: '8'},
    {key: 2, value: '1'},
    {key: 3, value: ''},

    {key: 4, value: ''},
    {key: 5, value: ''},
    {key: 6, value: ''},

    {key: 7, value: '9'},
    {key: 8, value: '3'},
    {key: 9, value: ''},
];
const row5: PeriodicElement[] = [
    {key: 1, value: ''},
    {key: 2, value: ''},
    {key: 3, value: ''},

    {key: 4, value: '9'},
    {key: 5, value: '2'},
    {key: 6, value: '8'},

    {key: 7, value: ''},
    {key: 8, value: ''},
    {key: 9, value: ''},
];
const row6: PeriodicElement[] = [
    {key: 1, value: ''},
    {key: 2, value: '9'},
    {key: 3, value: '5'},

    {key: 4, value: ''},
    {key: 5, value: ''},
    {key: 6, value: ''},

    {key: 7, value: ''},
    {key: 8, value: '8'},
    {key: 9, value: '4'},
];
const row7: PeriodicElement[] = [
    {key: 1, value: ''},
    {key: 2, value: ''},
    {key: 3, value: ''},

    {key: 4, value: '1'},
    {key: 5, value: ''},
    {key: 6, value: ''},

    {key: 7, value: '3'},
    {key: 8, value: '9'},
    {key: 9, value: '6'},
];
const row8: PeriodicElement[] = [
    {key: 1, value: ''},
    {key: 2, value: ''},
    {key: 3, value: '9'},

    {key: 4, value: ''},
    {key: 5, value: '8'},
    {key: 6, value: '6'},

    {key: 7, value: ''},
    {key: 8, value: '4'},
    {key: 9, value: ''},
];
const row9: PeriodicElement[] = [
    {key: 1, value: ''},
    {key: 2, value: '3'},
    {key: 3, value: ''},

    {key: 4, value: ''},
    {key: 5, value: ''},
    {key: 6, value: ''},

    {key: 7, value: ''},
    {key: 8, value: ''},
    {key: 9, value: '9'},
];

