import { Component } from '@angular/core';
import {concatMap, firstValueFrom, from, merge, Observable, of} from "rxjs";
import {catchError, filter, map, tap} from "rxjs/operators";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  template: `
    <app-nav/>
    <router-outlet></router-outlet>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs-playground';

  form = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null),
    address: new FormControl(null),
    b: new FormControl()
  })




  constructor() {
    const disableB$ = merge(this.form.controls.name.valueChanges,  this.form.controls.address.valueChanges).pipe(
      tap({
        next: value => disableB(value)
      })
    )

    this.form.controls.name.valueChanges.subscribe(name => {
      disableB(name)
    })
    this.form.controls.address.valueChanges.subscribe(address => {
      disableB(address)
    })

    disableB$.subscribe()


    const disableB = (value) => {
      if(value){
        this.form.controls.b.disable()
      } else {
        this.form.controls.b.enable();
      }
    }


















    const promise = new Promise((resolve, reject) =>
      setTimeout(() => resolve(10), Math.random() * 500)
    );

    //promise.then(console.log);

    const fromPromise$ = from(promise);
    //fromPromise$.subscribe(console.log)



    //source$.toPromise().then(console.log)
    //firstValueFrom(source$)
    /**
     * npm i -g @angular/cli
     * ---> ng version sollte Angular: >14.x.x liefern
     * ng new rxjs-ws
     */
    const source$: Observable<number | null | undefined> = of(1,2,3, null, undefined)

    const a$: Observable<number> = source$.pipe(
      //filter(v => !!v)
    )


  }

}

interface Dog {
  name: string;
  canRun: boolean;
}

type Bird  ={
  canFly: boolean;
  name: string;
}

class Pet{

}



function isDog(arg: Dog | Bird): arg is Dog {
  return !!(arg as Dog)?.canRun
}

function isType<T>(arg: any, property: keyof T): arg is T {
  return !!arg[property]
}

function isNotNullOrUndefined<T>(arg: any): arg is T {
  return !!arg;
}

function a(arg: Dog | Bird){
  const c = arg;
  // Dog
  if (isType<Dog>(arg, "canRun") ) {
    const b = arg;
    return 'Dog'
  }

  // Bird
  if (isType<Bird>(arg, "canFly")) {
    const bird = arg;
    return 'Bird'
  }

  return ''

}
