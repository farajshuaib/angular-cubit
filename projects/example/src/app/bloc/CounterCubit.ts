import { Injectable } from "@angular/core";
import { CounterState } from "./CounterState";
import {Cubit} from "angular-cubit";



@Injectable({
  providedIn: 'root',
})
export class CounterCubit extends Cubit<CounterState> {
  constructor() {
    super(new CounterState());
  }

  increment() {
    this.emit(this.copyWith({ count: this.state.count + 1 }));
  }

  decrement() {
    this.emit(this.copyWith({ count: this.state.count - 1 }));
  }
}
