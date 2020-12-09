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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
