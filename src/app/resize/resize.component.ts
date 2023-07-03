import {Component, ElementRef, inject, OnDestroy} from '@angular/core';
import { CommonModule } from '@angular/common';
import {from, Observable, of, Subscription, throttleTime} from "rxjs";

export function isElementRef(value: unknown): value is ElementRef {
  return value instanceof ElementRef;
}

export function createResizeObserver(
  observeElement: ElementRef | Element,
): Observable<ResizeObserverEntry[]> {

  return new Observable<ResizeObserverEntry[]>((subscriber) => {
    const resizeObserver = new ResizeObserver((resizeEvent: ResizeObserverEntry[]) => {
      //console.log('ResizeObserver: ', resizeEvent)
      subscriber.next(resizeEvent);
    });

    resizeObserver.observe(
      isElementRef(observeElement)
        ? observeElement.nativeElement
        : observeElement
    );

    return () => {
      console.log('unsubscribe createResizeObserver')
      resizeObserver.disconnect()
    };
  });

}
@Component({
  selector: 'app-resize',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      resize works!
    </p>
  `,
  styles: [
    `
    :host{
      display: block;
      width: 300px;
      height: 200px;
      resize: both;
      overflow: auto;
      border: 1px dashed black;
      background-color: beige;
    }
  `
  ]
})
export class ResizeComponent implements OnDestroy{
  elRef = inject(ElementRef);
  resizeObservable$ = createResizeObserver(this.elRef);
   sub = new Subscription();

   resizeObserver: null | ResizeObserver = null;
  constructor() {
    this.sub = this.resizeObservable$
      .pipe(
        throttleTime(500)
      )
      .subscribe((x) => console.log('From Rxjs wrapped ResizeObserver', x));


    setTimeout(() => this.sub.unsubscribe(), 5000)

    /*
    this.resizeObserver = new ResizeObserver(resizeEvent => {
      console.log('Component resized, ', resizeEvent)
    })

    this.resizeObserver?.observe(this.elRef.nativeElement)
    */
    /*
    const a = of(1,2,3)
    const source$ = new Observable(subscriber => {
      subscriber.next(1)
      subscriber.next(2)
      subscriber.next(3)
      subscriber.complete();


    })

    a.subscribe(console.log);
    source$.subscribe(console.log);
    */

  }

  ngOnDestroy() {
    this.resizeObserver?.disconnect()
  }

}
