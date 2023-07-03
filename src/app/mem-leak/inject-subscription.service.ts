import {inject, Injectable, OnDestroy} from "@angular/core";
import {Observable, Subscription, tap} from "rxjs";

@Injectable()
export class SubscriptionService implements OnDestroy {
  private sub = new Subscription();

  subscribe<T>(source$: Observable<T>, effect?: (v: T) => void): void {
    this.sub.add(
      source$.pipe(
        tap(effect)
      ).subscribe()
    )
  }

  ngOnDestroy() {
    console.log('Destroy SubscriptionService')
    this.sub.unsubscribe();
  }
}

export function provideSubscriptionService() {
  return SubscriptionService
}

export function injectSubscriptionService() {
  return inject(SubscriptionService, {self: true})
}
