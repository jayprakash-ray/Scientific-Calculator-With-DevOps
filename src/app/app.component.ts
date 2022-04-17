import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ScienticCalculatorWithDevOps';
  value :String =""
  operand1: number = 0;
  operand2: number = 0;
  operator: String = "";
  expOprn: boolean = false;
  performed: boolean = false;
  first: boolean = false;
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
  cancel() {
    this.operand1 = 0;
    this.operand2 = 0;
    this.sdisplay="";
  }
   keyPress(x: number) {
   
      if(this.performed){
        this.operand1 = x;
        this.performed = false;
        return;
      }
      if (this.expOprn && this.first) {
        this.first = false;
        this.operand1 = 0;
      }
      this.operand1 = (this.operand1 * 10) + x;''
  
      // logger.info("Add called.")
  
  
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
    this.operand2 = this.operand1
    this.expOprn = true;
    this.first = true;

  }
  calculate() {
    if (this.expOprn) {
      this.operand1 = Math.pow(this.operand2, this.operand1);
      this.value = this.operand1.toString();
    } else {
      this.operand1 = 0;
      this.value = this.operand1.toString();
    }
    this.expOprn = false;
    this.performed = true;

  }

}


