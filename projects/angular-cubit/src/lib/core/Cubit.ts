import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {State} from './State';

export class Cubit<T extends State<T>> {
  private stateSubject: BehaviorSubject<T>;

  constructor(initialState: T) {
    this.stateSubject = new BehaviorSubject<T>(initialState);
  }

  public get state$(): Observable<T> {
    return this.stateSubject.asObservable();
  }

  public get state(): T {
    return this.stateSubject.getValue();
  }

  protected emit(newState: T): void {
    this.stateSubject.next({
      ...this.state,
      ...newState
    });
  }


  public watch(callback: () => void, dependencies: (keyof T)[]): () => void {
    // watch dependencies changes and call the method when one or more dependency changes
    const subscriptions: Subscription[] = [];
    dependencies.forEach((dependency) => {
      subscriptions.push(
        this.state$.subscribe((state) => {
          if (state[dependency] !== this.state[dependency]) {
            callback();
          }
        })
      );
    });

    // unsubscribe when the component is destroyed
    return () => {
      subscriptions.forEach((subscription) => subscription.unsubscribe());
    }
  }
}
