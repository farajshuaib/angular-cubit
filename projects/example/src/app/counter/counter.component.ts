import {Component, OnInit} from '@angular/core';
import {CounterCubit} from '../bloc/CounterCubit';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  standalone: true
})
export class CounterComponent implements OnInit {
  constructor(protected counterCubit: CounterCubit) {
  }

  ngOnInit(): void {
    this.counterCubit.watchCount();
  }

  increment() {
    this.counterCubit.increment();
  }

  decrement() {
    this.counterCubit.decrement();
  }

  get count() {
    return this.counterCubit.state.count;
  }
}
