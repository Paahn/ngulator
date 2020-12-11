import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgulatorComponent } from './ngulator.component';

describe('NgulatorComponent', () => {
  let component: NgulatorComponent;
  let fixture: ComponentFixture<NgulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('performs addition correctly', () => {
    const testNum1 = 5;
    const testNum2 = 4;
    const tested = component.add(testNum1, testNum2);
    expect(tested).toEqual(9);
  });

  it('performs subtraction correctly', () => {
    const testNum1 = 5;
    const testNum2 = 4;
    const tested = component.subtract(testNum1, testNum2);
    expect(tested).toEqual(1);
  });

  it('performs multiplication correctly', () => {
    const testNum1 = 5;
    const testNum2 = 4;
    const tested = component.multiply(testNum1, testNum2);
    expect(tested).toEqual(20);
  });

  it('performs division correctly', () => {
    const testNum1 = 8;
    const testNum2 = 9;
    const tested = component.divide(testNum1, testNum2);
    expect(tested).toEqual(0.888889);
  });
});
