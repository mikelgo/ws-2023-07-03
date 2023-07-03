import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MemLeakComponent} from "./mem-leak.component";

@Component({
  selector: 'app-mem-leak-parent',
  standalone: true,
  imports: [CommonModule, MemLeakComponent],
  template: `
    <button (click)="toggle()">toggle visibility</button>
    <app-mem-leak *ngIf="visible"/>
  `,
  styles: [
  ]
})
export class MemLeakParentComponent {
  visible = true;
  toggle(){
    this.visible = !this.visible
  }
}
