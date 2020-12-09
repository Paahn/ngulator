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
}
