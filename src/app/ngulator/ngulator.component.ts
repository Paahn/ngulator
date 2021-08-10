import { Component } from '@angular/core';

@Component({
  selector: 'ngulator',
  templateUrl: './ngulator.component.html',
  styleUrls: ['./ngulator.component.css']
})
export class NgulatorComponent{
  private operator: string = '';
  public result: string = '';
  private nums: string[] = [];
  public clearButton: string = 'clear';
  public numbers: string[] = ['9', '0', '5', '6', '7', '8', '1', '2', '3', '4'];
  private operators: string[] = ['+', '-', '*', '/'];
  public execute: string = '=';
  // private runMe: boolean = false;
  private counter: number = 0;
  private operatorCounter: number = 0;

  public clearMyScreen() {
    this.result = '';
    this.nums = [];
    this.operator = '';
    this.counter = 0;
    this.operatorCounter = 0;
  };

  private setError() {
    this.result = 'ERROR';
    setTimeout(() => this.clearMyScreen(), 1500);
  }

  public setOperator(value: string) {
    if (this.operatorCounter < 1) {
      this.operator = value;
      this.screen(value);
      this.operatorCounter++;
    }
  };


  public executeOp(){
    if (this.operator == '+') {
      this.result = (this.add(this.nums[0], this.nums[1])).toString();
    } else if (this.operator == "-") {
      this.result = (this.subtract(this.nums[0], this.nums[1])).toString();
    } else if (this.operator == "/") {
      this.result = (this.divide(this.nums[0], this.nums[1])).toString();
    } else if (this.operator == "*") {
      this.result = (this.multiply(this.nums[0], this.nums[1])).toString();
    }
  }

  private add(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    return a + b;
  };

  private subtract(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    return a - b;
  };

  private divide(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    return parseFloat((a / b).toFixed(6));
  };

  private multiply(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    return a * b;
  };

  private screen(expression) {
    this.result += expression.toString();
    this.counter += 1;
  };

  public operate(number) {
    this.screen(number);
    this.nums.push(number);

    if (this.operator == '') return;
    if (this.nums.length != 2 || this.counter != 3) {
      this.setError();
    }
  }
}
