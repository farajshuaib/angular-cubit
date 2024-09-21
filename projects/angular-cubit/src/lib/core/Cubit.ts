import { BehaviorSubject, Observable } from 'rxjs';
import { State } from './State';

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
    this.stateSubject.next(newState);
  }

  protected copyWith(changes: Partial<T>): T {
    return {
      ...this.state,
      ...changes,
    };
  }
}
