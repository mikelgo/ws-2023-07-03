import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  concatAll,
  concatMap,
  exhaustMap,
  map,
  Observable,
  of,
  ReplaySubject,
  retry,
  share,
  Subject,
  switchMap,
  toArray,
  NEVER,
  EMPTY
} from 'rxjs';
import { Post } from '../shared/types';

/**
 *
 */

@Component({
  selector: 'app-error-handling',
  template: `
    <button (click)="load$$.next(null)">load data</button>
    <br />
    <button (click)="click$$.next(null)">click me</button>
    <hr />

    <div>
      Data
      <br />
      {{ posts | json }}
    </div>

  `,
  standalone: true,
  imports: [CommonModule],
})
export class ErrorHandlingComponent implements OnInit {
  click$$ = new Subject<null>();

  posts: Post[] | null = [];
  load$$ = new BehaviorSubject(null);
  http = inject(HttpClient);
  /**
   * switchMap, mergeMap, concatMap, exhaustMap
   */
  data$ = this.load$$.pipe(
    concatMap(() =>
      this.fetchPosts().pipe(
        map((v) => v?.map((v) => v.title))
        // concatAll(),
        // map((v) => v.title),
        // toArray()
      )
    )
  );

  constructor() {
    this.click$$.pipe(concatMap(() => this.fetch())).subscribe({
      next: (v) => console.log(v),
      error: (err) => console.log(err),
    });

    this.load$$
      .pipe(
        switchMap(
          () => this.fetchPosts()
          //.pipe(
          //  retry({ count: 2, resetOnSuccess: true, delay: 1000 })
          //)
        )
      )
      .subscribe({
        next: (posts) => (this.posts = posts),
        error: (error) => (this.posts = null),
        complete: () => console.log('complete'),
      });
  }

  fetch() {
    return new Observable((observer) => {
      observer.next(10);
      observer.error(new Error('Oops error'));
      //observer.complete();
      observer.next(20);
    }).pipe(catchError((err) => EMPTY));
  }
  ngOnInit() {}

  fetchPosts() {
    return Math.random() > 0.5
      ? this.http
        .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
        .pipe(catchError((err) => of(null)))
      : this.http
        .get<Post[]>('https://jsonplaceholder.typicode.com/posxxxx')
        .pipe(catchError((err) => of(null)));
  }
}
