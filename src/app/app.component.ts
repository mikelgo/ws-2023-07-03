import { Component } from '@angular/core';
import {firstValueFrom, from, of} from "rxjs";

@Component({
  selector: 'app-root',
  template: `
  <!--<app-counter/> -->
<button (click)="toggle()">toggle Visibility</button>
<app-mem-leak *ngIf="visible" />
  <app-resize></app-resize>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs-playground';
  visible = true


  constructor() {
    const promise = new Promise((resolve, reject) =>
      setTimeout(() => resolve(10), Math.random() * 500)
    );

    //promise.then(console.log);

    const fromPromise$ = from(promise);
    //fromPromise$.subscribe(console.log)

    const source$ = of(100);

    //source$.toPromise().then(console.log)
    firstValueFrom(source$)
    /**
     * npm i -g @angular/cli
     * ---> ng version sollte Angular: >14.x.x liefern
     * ng new rxjs-ws
     */
  }

  toggle() {
    this.visible = !this.visible
  }
}
