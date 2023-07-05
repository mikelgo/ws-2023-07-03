import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import {MemLeakComponent} from "./mem-leak/mem-leak.component";
import {HttpClientModule} from "@angular/common/http";
import {ResizeComponent} from "./resize/resize.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NavComponent} from "./core/nav.component";
import { CombinationOperatorsComponent } from './combination-operators/combination-operators.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import {TutorialBasicsModule} from "./tutorials/basics/tutorial-basics.module";

@NgModule({
  declarations: [
    AppComponent,
    CombinationOperatorsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterComponent,
    MemLeakComponent,
    HttpClientModule,
    ResizeComponent,
    BrowserAnimationsModule,
    NavComponent,
    ErrorHandlingComponent,
    TutorialBasicsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
