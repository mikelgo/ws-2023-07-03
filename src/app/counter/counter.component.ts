import { ChangeDetectionStrategy, Component } from '@angular/core';
import {BehaviorSubject, from, map, of, Subject, concatMap, merge, scan, interval} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="userClick$$.next(1)"> increment</button>
    <button (click)="userClick$$.next(-1)"> decrement</button>

    <div>
      Current Count is {{counter$ | async}}
    </div>

    <hr>

    <button (click)="onIncrement()"> increment</button>
    <button (click)="onDecrement()"> decrement</button>

    <div>
      Current Count is {{counter}}
    </div>
  `,
  styleUrls: ['./counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe
  ]
})
export class CounterComponent {
  userClick$$ = new Subject<number>()
  // decrement$$ = new Subject<number>()
  counter = 0;


  counter$ = merge(this.userClick$$, interval(1000).pipe(map(() => 1))).pipe(
    scan((currentCount, value) => currentCount + value, 0)
  )

  onIncrement() {
    // this.userClick$$.next(1)
    this.counter = this.counter++

  }

  onDecrement(){
    this.counter = this.counter--
  }


  constructor() {
/*    this.increment$$.pipe(
      concatMap(() => this.counter$)
    ).subscribe()*/
    setInterval(() => this.counter++, 1000)
  }

  //counter$$ = from(0)


}

// SCAM -> Single Component Angular Module
/*@NgModule({
  declarations: [
    CounterComponent,

  ],
  exports: [CounterComponent]
})
export class CounterComponentModule { }*/
