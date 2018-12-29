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
    boardForCol = [this.rowOne,this.rowTwo,this.rowThree,this.rowFour,this.rowFive,this.rowSix,this.rowSeven,this.rowEight,this.rowNine]
    retRow=0;
    retCol=0;
    retRowandCol =0;
    firstMatrix = [this.rowOne,this.rowTwo,this.rowThree];
    secondMatrix = [this.rowFour,this.rowFive,this.rowSix];
    thirdMatrix = [this.rowSeven,this.rowEight,this.rowNine];
    checker=false;
    selectedRow;
    playerName;

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
    selectedIdx;
    constructor(public nav:NavParams) {
    this.playerName = this.nav.get('playerName');
    }
    isValidSudoku(index,num,from){
        console.log(index,from);
        this.selectedIdx=index;
        this.selectedRow=from;

        switch (from) {
            case arrayFrom.One:
                // console.log('isFrom'+ num);
                // console.log('isFrom'+ from);
                 this.checkedByRow(num,index,this.rowOne);
                 this.checkedByCol(index,num,0);
                //this.validate();
                this.checkedInMatrix(this.firstMatrix,index,0,num);
                // let arr = this.rowOne.slice().sort();
                // var results = [];
                // if(num == '') return;
                // for (let i = 0; i < arr.length - 1; i++) {
                //     if(i == index) i++;
                //     if (arr[i].value == arr[index].value) {
                //         results.push(arr[i]);
                //         arr[index].value += 10;
                //         return;
                //     }
                //
                // }
                //
                // console.log(results);
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
                // console.log('isFrom'+ num);
                // console.log('isFrom'+ from);
                this.checkedByRow(num,index,this.rowTwo);
                 this.checkedByCol(index,num,1);
              this.checkedInMatrix(this.firstMatrix,index,1,num);
               // this.validate();
                break;
            case arrayFrom.Three:
                // console.log('isFrom'+ num);
                // console.log('isFrom'+ from);
                this.checkedByRow(num,index,this.rowThree);
                this.checkedByCol(index,num,2);
              this.checkedInMatrix(this.firstMatrix,index,2,num);
                this.validate();
                break;
            case arrayFrom.Four:
                // console.log('isFrom'+ num);
                // console.log('isFrom'+ from);
                this.checkedByRow(num,index,this.rowFour);
               this.checkedByCol(index,num,3);
                this.checkedInMatrix(this.secondMatrix,index,0,num);
               // this.validate();
                break;
            case arrayFrom.Five:
                // console.log('isFrom'+ num);
                // console.log('isFrom'+ from);
                this.checkedByRow(num,index,this.rowFive);
                this.checkedByCol(index,num,4);
                this.checkedInMatrix(this.secondMatrix,index,1,num);
                this.validate();
                break;
            case arrayFrom.Six:
                // console.log('isFrom'+ num);
                // console.log('isFrom'+ from);
               this.checkedByRow(num,index,this.rowSix);
                 this.checkedByCol(index,num,5);
             this.checkedInMatrix(this.secondMatrix,index,2,num);
               // this.validate();
                break;
            case arrayFrom.Seven:
                // console.log('isFrom'+ num);
                // console.log('isFrom'+ from);
              this.checkedByRow(num,index,this.rowSeven);
              this.checkedByCol(index,num,6);
                this.checkedInMatrix(this.thirdMatrix,index,0,num);
                //this.validate();
                break;
            case arrayFrom.Eight:
                // console.log('isFrom'+ num);
                // console.log('isFrom'+ from);
                this.checkedByRow(num,index,this.rowEight);
                this.checkedByCol(index,num,7);
                this.checkedInMatrix(this.thirdMatrix,index,1,num);
               // this.validate();
                break;
            case arrayFrom.Nine:
                // console.log('isFrom'+ num);
                // console.log('isFrom'+ from);
                 this.checkedByRow(num,index,this.rowNine);
                 this.checkedByCol(index,num,8);
                this.checkedInMatrix(this.thirdMatrix,index,2,num);
               // this.validate();
                break;
        }
    }
    keyBoardEvent(numb){
        this.newValue = numb;
        console.log(numb);
    }

    checkedByRow(num,index,checkArray){
        let arr = checkArray.slice().sort();
        var results = [];
        if(num.value == '' || num == '' || num==null || num.value==null) {
            this.checker=false;
            return;
        }
        for (let i = 0; i < arr.length; i++) {
            if(i == index) i++;
            if(i==9) return;
            if (arr[i].value == arr[index].value) {
                this.checker=true;
                results.push(arr[i]);
                // arr[index].value = null;
                return 1;
            }
        }

        console.log(results);
        return 0;
    }

    checkedByCol(idx,num,fromrw){
        if(num.value == '' || num == ''|| num==null || num.value==null) {
            this.checker=false;
            return;
        }
    for(let col = 0;col< this.boardForCol.length;col++){
        if(col == fromrw) col++;
        if(col==9) return;
        let column = this.boardForCol[col];
        column = this.boardForCol[col];
        if(column[idx].value == num.value){
            // num.value = null;
            this.checker=true;
            return 1;
        }

    }
        return 0;
    }

    validate(){
        if(this.retCol == 0 && this.retRow == 0){
            return 0
        }
        return 1;
    }


    checkedInMatrix(arr,idx,fromRow,num){
        // console.log("checking Array" + arr);
        // console.log("checking index" + idx);
        // console.log("checking row" + fromRow);
        if(idx < 3){
            if(num.value == '' || num == ''|| num==null || num.value==null) {
                this.checker=false;
                return;
            }
            for(let i=0;i<=2;i++){
                let row = arr[i];
                for(let j=0;j<=2;j++){
                    if(i == fromRow && j == idx) j++;
                    if(row[j].value == num.value){
                        let selectedRow = arr[fromRow];
                        // selectedRow[idx].value +=30;
                        this.checker=true;
                        return 1;
                    }
                   // return
                }
            }
        }
        else if(idx > 2 && idx < 6){
            if(num.value == '' || num == ''|| num==null || num.value==null) {
                this.checker=false;
                return;
            }
            for(let i=1;i<=2;i++){
                let row = arr[i];
                for(let j=3;j<=5;j++){
                    if(i == fromRow && j == idx) j++;
                    if(row[j].value == num.value){
                        let selectedRow = arr[fromRow];
                        // selectedRow[idx].value +=30;
                        this.checker=true;
                        return;
                    }

                }
            }
        }
        else{
            if(num.value == '' || num == ''|| num==null || num.value==null) {
                this.checker=false;
                return;
            }
            for(let i=0;i<=2;i++){
                let row = arr[i];
                for(let j=6;j<=8;j++){
                    if(i == fromRow && j == idx){
                       j++;
                    }
                    if(j==9){
                        return
                    }
                    if(row[j].value == num.value){
                        let selectedRow = arr[fromRow];
                        // selectedRow[idx].value +=30;
                        this.checker=true;
                        return;
                    }

                }
            }
        }

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
     readonly? : boolean;
    // symbol: string;
}

const row1: PeriodicElement[] = [
    {key: 1, value: '',readonly :false},
    {key: 2, value: '',readonly :false},
    {key: 3, value: '7',readonly :true},

    {key: 4, value: '',readonly :false},
    {key: 5, value: '',readonly :false},
    {key: 6, value: '6',readonly :true},

    {key: 7, value: '',readonly :false},
    {key: 8, value: '',readonly :false},
    {key: 9, value: '9',readonly :true},
];
const row2: PeriodicElement[] = [
    {key: 1, value: '',readonly:false},
    {key: 2, value: '1',readonly:true},
    {key: 3, value: '',readonly:false},

    {key: 4, value: '5',readonly:true},
    {key: 5, value: '2',readonly:true},
    {key: 6, value: '',readonly:false},

    {key: 7, value: '7',readonly:false},
    {key: 8, value: '',readonly:false},
    {key: 9, value: '',readonly:false},
];
const row3: PeriodicElement[] = [
    {key: 1, value: '',readonly:false},
    {key: 2, value: '3',readonly:true},
    {key: 3, value: '9',readonly:true},

    {key: 4, value: '8',readonly:true},
    {key: 5, value: '',readonly:false},
    {key: 6, value: '',readonly:false},

    {key: 7, value: '',readonly:false},
    {key: 8, value: '',readonly:false},
    {key: 9, value: '4',readonly:true},
];
const row4: PeriodicElement[] = [
    {key: 1, value: '',readonly:false},
    {key: 2, value: '2',readonly:true},
    {key: 3, value: '',readonly:false},

    {key: 4, value: '',readonly:false},
    {key: 5, value: '5',readonly:true},
    {key: 6, value: '',readonly:false},

    {key: 7, value: '',readonly:false},
    {key: 8, value: '9',readonly:true},
    {key: 9, value: '',readonly:false},
];
const row5: PeriodicElement[] = [
    {key: 1, value: '',readonly:false},
    {key: 2, value: '',readonly:false},
    {key: 3, value: '',readonly:false},

    {key: 4, value: '2',readonly:true},
    {key: 5, value: '9',readonly:true},
    {key: 6, value: '4',readonly:true},

    {key: 7, value: '',readonly:false},
    {key: 8, value: '',readonly:false},
    {key: 9, value: '',readonly:false},
];
const row6: PeriodicElement[] = [
    {key: 1, value: '',readonly:false},
    {key: 2, value: '4',readonly:true},
    {key: 3, value: '',readonly:false},

    {key: 4, value: '',readonly:false},
    {key: 5, value: '7',readonly:true},
    {key: 6, value: '',readonly:false},

    {key: 7, value: '',readonly:false},
    {key: 8, value: '5',readonly:true},
    {key: 9, value: '',readonly:false},
];
const row7: PeriodicElement[] = [
    {key: 1, value: '8',readonly:true},
    {key: 2, value: '',readonly:false},
    {key: 3, value: '',readonly:false},

    {key: 4, value: '',readonly:false},
    {key: 5, value: '',readonly:false},
    {key: 6, value: '1',readonly:true},

    {key: 7, value: '3',readonly:true},
    {key: 8, value: '4',readonly:true},
    {key: 9, value: '',readonly:false},
];
const row8: PeriodicElement[] = [
    {key: 1, value: '',readonly:false},
    {key: 2, value: '',readonly:false},
    {key: 3, value: '6',readonly:true},

    {key: 4, value: '',readonly:false},
    {key: 5, value: '3',readonly:true},
    {key: 6, value: '5',readonly:true},

    {key: 7, value: '',readonly:false},
    {key: 8, value: '8',readonly:true},
    {key: 9, value: '',readonly:false},
];
const row9: PeriodicElement[] = [
    {key: 1, value: '4',readonly:true},
    {key: 2, value: '',readonly:false},
    {key: 3, value: '',readonly:false},

    {key: 4, value: '7',readonly:true},
    {key: 5, value: '',readonly:false},
    {key: 6, value: '',readonly:false},

    {key: 7, value: '9',readonly:true},
    {key: 8, value: '',readonly:false},
    {key: 9, value: '',readonly:false},
];

