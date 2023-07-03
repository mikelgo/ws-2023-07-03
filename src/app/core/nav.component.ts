import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  RouterModule,
  RouterLinkWithHref,
  RouterLinkActive, RouterLink,
} from '@angular/router';
import {routes} from "../app-routing.module";


@Component({
  selector: 'app-nav',
  template: `
    <h1>Rxjs Workshop</h1>
    <div *ngFor="let item of navItems">
      <a [routerLink]="item.path" routerLinkActive="active"> {{item.label}}</a>
    </div>
  `,
  styles: [
    `
    :host {
      display: flex;
      gap: 16px;
      padding: 16px;
      border-bottom: 2px solid blue;
      margin-bottom: 16px;
    }

    .active {
      border-bottom: 4px solid black;
    }
  `,
  ],
  imports: [RouterLinkActive, RouterLinkWithHref, NgForOf, RouterLink],
  standalone: true,
})
export class NavComponent {
  navItems = routes.map((route) => {
    return {
      path: route.path,
      label: route.path,
    };
  });
}
