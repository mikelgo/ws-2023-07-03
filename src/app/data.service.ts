import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";

export type Post = {
  id: number;
  userId: number;
  body: string;
  title: string
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private http = inject(HttpClient)

  constructor() { }

  getData(){
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/1')
  }

  updateData(data: any) {
    return of(10)
  }
}
