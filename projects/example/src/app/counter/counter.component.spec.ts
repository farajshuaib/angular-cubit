import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {CounterComponent} from './counter.component';
import {AppComponent} from "../app.component";

describe('CounterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent],
    }).compileComponents();
  });


  it('should create the counter component', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    const counterComponent = fixture.componentInstance;
    expect(counterComponent).toBeTruthy();
  });



  it('should check default value', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    const counterComponent = fixture.componentInstance;
    expect(counterComponent.count).toEqual(0);
  });

  it('should increment the count', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    const counterComponent = fixture.componentInstance;
    counterComponent.increment();
    expect(counterComponent.count).toEqual(1);
  });


  it('should decrement the count', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    const counterComponent = fixture.componentInstance;
    counterComponent.decrement();
    expect(counterComponent.count).toEqual(-1);
  });


});
