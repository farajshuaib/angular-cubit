import {Injectable} from "@angular/core";
import {CounterState} from "./CounterState";
import {Cubit} from "angular-cubit";


@Injectable({
  providedIn: 'root',
})
export class CounterCubit extends Cubit<CounterState> {
  constructor() {
    super(new CounterState());
  }

  increment() {
    this.emit({count: this.state.count + 1});
  }

  decrement() {
    this.emit({count: this.state.count - 1});
  }

  reset() {
    this.emit({count: 0});
  }

  watchCount() {
    this.watch(() => {
      console.log("count changed to: ", this.state.count);
    }, ["count"]);
  }
}
