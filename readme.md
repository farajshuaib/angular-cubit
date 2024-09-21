# Angular Cubit State Management

## Overview
This library provides a lightweight and intuitive state management solution for Angular applications, inspired by Flutter's Cubit. It leverages RxJS for reactivity and ensures type-safe state handling with immutability through a copyWith method. Ideal for developers seeking a streamlined approach to managing state without the overhead of more complex libraries.


## Prerequisites
- Angular: Ensure users have Angular installed.
- RxJS: Mention any specific RxJS features or versions required.



## Installation

Install the package via npm:

```bash
npm install angular-cubit
```

Install the package via yarn:

```bash
yarn add angular-cubit
```

## Usage

### Create a State Implementation
Implement the state interface with a copyWith method:

```typescript
import {State} from "angular-cubit";

export class CounterState implements State<CounterState> {
  count: number;

  constructor(count: number = 0) {
    this.count = count;
  }
}
```

### Create a Cubit
Create a Cubit class that extends `Cubit`:
Extend the Cubit class to create a specific cubit:


```typescript
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
```


### Use the Cubit in a Component
Inject the cubit into a component and bind to its state:

```typescript
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  standalone: true
})
export class CounterComponent {
  constructor(protected counterCubit: CounterCubit) {}

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
```

```html
<div class="container">
  <button class="btn" (click)="decrement()">-</button>
  <span class="count">{{ count }}</span>
  <button class="btn" (click)="increment()">+</button>
</div>
```

## Contributing

Invite users to contribute to the project. Include guidelines for:

- Forking the repository
- Cloning the repository
- Adding a new feature
- Submitting pull requests


## License

[MIT](https://choosealicense.com/licenses/mit/)


