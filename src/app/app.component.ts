import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator-app';
  operand1: number = 0;
  operand2: number = 0;
  operator: String = "";
  expOprn: boolean = false;
  performed: boolean = false;
  sdisplay:String='';
  
   keyPress(x: number) {
    if(this.performed){
      this.operand1 = x;
      this.performed = false;
      return;
    }
  }

}


