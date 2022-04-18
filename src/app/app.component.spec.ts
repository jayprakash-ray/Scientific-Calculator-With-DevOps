import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoggerModule } from 'ngx-logger';
import { LoggerService } from './_services/logger.service';
import { AppComponent } from './app.component';

describe('Calculator Unit Tests', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        AppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ScientificCalculatorWithDevOps'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ScientificCalculatorWithDevOps');
  });
  
  it("Testing input as  1", () => {
    const cal = fixture.componentInstance;
    cal.keyPress(1);
    expect(cal.operand1).toEqual(1);
  })
  
  it("Testing input as 15", () => {
    const cal = fixture.componentInstance;
    cal.keyPress(1);
    cal.keyPress(5);
    expect(cal.operand1).toEqual(15);
  })
  
  it("Testing Root of 144", () => {
    const cal = fixture.componentInstance;
    cal.keyPress(1);
    cal.keyPress(4);
    cal.keyPress(4);
    cal.sqroot()
    expect(cal.operand1).toEqual(12);
  })
  
  it("Testing Factorial of 5", () => {
    const cal = fixture.componentInstance;
    cal.keyPress(5);
    cal.factorial()
    expect(cal.operand1).toEqual(120);
  })
  
  it("Testing Exponential of 9 to power 2", () => {
    const cal = fixture.componentInstance;
    cal.keyPress(9);
    cal.power()
    cal.keyPress(2)
    cal.calculate()
    expect(cal.operand1).toEqual(81);
  })
  
  it("Testing Log of 50", () => {
    const cal = fixture.componentInstance;
    cal.keyPress(5);
    cal.keyPress(0);
    cal.log();
    expect(cal.operand1).toEqual(3.912023005428146);
  })
  
});
