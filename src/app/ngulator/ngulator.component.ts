import { Component } from '@angular/core';

@Component({
  selector: 'ngulator',
  templateUrl: './ngulator.component.html',
  styleUrls: ['./ngulator.component.css']
})
export class NgulatorComponent{
  operator: string = '';
  result: string = '';
  nums: string[] = [];
  clearButton: string = 'clear';
  numbers: string[] = ['9', '0', '5', '6', '7', '8', '1', '2', '3', '4'];
  operators: string[] = ['+', '-', '*', '/'];

  clearMyScreen() {
    this.result = '';
    this.nums = [];
    this.operator = '';
  }

  setOperator(value: string) {
    this.screen(value);
    this.operator = value;
    console.log(this.operator);
    console.log(this.screen(value));
  }

  executeOp(){
    switch (this.operator) {
      case '+': {
        this.result = (this.add(this.nums[0], this.nums[1])).toString();
        break;
      }
      case '-': {
        this.result = (this.subtract(this.nums[0], this.nums[1])).toString();
        break;
      }
      case '*': {
        this.result = (this.divide(this.nums[0], this.nums[1])).toString();
        break;
      }
      case '/': {
        this.result = (this.multiply(this.nums[0], this.nums[1])).toString();
        break;
      }
    };
  };
  
  add(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    return a + b;
  };
  subtract(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    return a - b;
  };
  divide(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    return a / b;
  };
  multiply(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    return a * b;
  };

  screen(expression) {
    this.result += expression.toString();
  }
}
