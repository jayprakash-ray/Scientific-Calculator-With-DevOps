import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ScienticCalculatorWithDevOps';
  operand1: number = 0;
  operand2: number = 0;
  operator: String = "";
  expOprn: boolean = false;
  performed: boolean = false;
  sdisplay:String='';

  fact(n: number): any {
    
    if (n == 0 || n == 1)
      return 1;
    return this.fact(n - 1) * n;
  }

  factorial() {
    if(!Number.isInteger(this.operand1))
      {
        this.sdisplay="Invalid Number!"
        return;
      }
    this.operand1 = this.fact(this.operand1);
    this.performed = true;
  }
   keyPress(x: number) {
    if(this.performed){
      this.operand1 = x;
      this.performed = false;
      return;
    }
  }
  log() {
    this.operand1 = Math.log(this.operand1);
    this.performed = true;
  }
  sqroot() {
    this.operand1 = Math.sqrt(this.operand1);
    this.performed = true;
  }
  power() {
    this.operand2= this.operand1
    this.expOprn = true;
  }
  calculate() {
    if (this.expOprn) {
      this.operand1 = Math.pow(this.operand2, this.operand1);
    } else {
      this.operand1 = 0;
    }
    this.expOprn = false;
    this.performed = true;
    this.sdisplay="";
  }

}


