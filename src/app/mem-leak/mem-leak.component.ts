import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataService, Post} from "../data.service";
import {interval, take, tap} from "rxjs";
import {SomeComponent} from "../some/some.component";
import {injectSubscriptionService, provideSubscriptionService} from "./inject-subscription.service";


@Component({
  selector: 'app-mem-leak',
  standalone: true,
  imports: [CommonModule, SomeComponent],
  template: `
    <p>
      mem-leak works!
    </p>
    <hr>
    <br>
    Data: {{data$ | async | json}} {{interval$ | async}}
     Data: {{data | json}}

    <br>
    <app-some/>S
  `,
  styleUrls: ['./mem-leak.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [provideSubscriptionService()]
})
export class MemLeakComponent{
  subService = injectSubscriptionService()
  dataService = inject(DataService)
  data: Post | null = null


  data$ = this.dataService.getData();
  //cdr = inject(ChangeDetectorRef)

  interval$ = interval(1000).pipe(
    tap({
      next: v => console.log(v)
    }),
    take(10)
  )

  constructor() {
    this.subService.subscribe(this.dataService.getData(), data => this.data = data)

    /*this.dataService.getData().pipe(
    ).subscribe(data => {
      this.data = data
    })*/


    /*
    this.subscription.add(this.dataService.getData().pipe(
      switchMap((data) => this.dataService.updateData(data))
    ).subscribe(data => {

    }))

    this.subscription.add(this.dataService.getData().subscribe(data => this.data = data))
*/

  }


  a(){}

}
