import { Component } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-exo-calculatrice',
  templateUrl: './exo-calculatrice.component.html',
  styleUrl: './exo-calculatrice.component.css'
})
export class ExoCalculatriceComponent {
  value1: any ="";
  value2: any ="";
  operator: string ="";
  results: any[] = [];
  resultat: any ="";
  index : number= 0;

  submitApplication() {
    let result: number = 0;
    var number1 = parseFloat(this.value1);
    var number2 = parseFloat(this.value2);
    var operatorSelected = "";
    
    let date = new Date();

    if (this.operator == 'add') {
      result = number1 + number2;
      operatorSelected = " + "
    } else if (this.operator == 'minus') {
      result = number1 - number2;
      operatorSelected = " - "
    } else if (this.operator == 'multiply') {
      result = number1 * number2;
      operatorSelected = " x "
    } else if (this.operator == 'divide') {
      result = number1 / number2;
      operatorSelected = " / "
    }

    var history = [date,number1,operatorSelected,number2,result,this.index];
    this.resultat = result;
    this.results.unshift(history);
    this.index++ 
  }

  DeleteLine(e:number) {
    this.results.forEach((Array: any[])=> {
      var DeleteIndex = this.results.indexOf(Array);
        if (Array[5] == e) {
          this.results.splice(DeleteIndex, 1)
        }
      })
  }

}
