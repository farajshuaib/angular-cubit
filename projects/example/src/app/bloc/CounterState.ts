import {State} from "angular-cubit";

export class CounterState implements State<CounterState> {
  count: number;

  constructor(count: number = 0) {
    this.count = count;
  }
}
