import {Component, inject} from '@angular/core';
import {
  combineLatest,
  combineLatestWith,
  EMPTY,
  exhaustMap,
  merge,
  Observable,
  of,
  Subject,
  take,
  withLatestFrom
} from "rxjs";
import {DataService} from "../data.service";
import {injectSubscriptionService, provideSubscriptionService} from "../mem-leak/inject-subscription.service";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-combination-operators',
  templateUrl: './combination-operators.component.html',
  styleUrls: ['./combination-operators.component.css'],
  providers: [provideSubscriptionService()]
})
export class CombinationOperatorsComponent {
  private sub = injectSubscriptionService();
  private dataService = inject(DataService);
  btnClick$$ = new Subject<null>()

  data$ = this.dataService.getData()
  data: any;

  updateData$ = this.btnClick$$.pipe(
    // combineLatestWith(this.data$),
    withLatestFrom(this.data$),
    exhaustMap((data) => this.dataService.updateData(data)),
    tap({
      next: () => console.log('Update data successful')// snackbar anzeigen
    }),


  )


  constructor() {
    this.sub.subscribe(this.updateData$)
    this.updateData$.subscribe({

    })

    const source1$ = of(10, 20)
    const source2$ = EMPTY;

    const merge$= merge(source2$, source1$)
      .subscribe(x => console.log('merge$ ', x))

    const combineLatest$ = combineLatest([source1$, source2$])
      .subscribe(x => console.log('combineLatest$ ', x))

  }

  onSave(data: any){
    this.dataService.updateData(data).pipe(take(1)).subscribe()
  }

}
