import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SetupContainerComponent} from "./tutorials/basics/1-setup/setup-container.component";
import {ResizeComponent} from "./resize/resize.component";
import {MemLeakParentComponent} from "./mem-leak/mem-leak-parent.component";
import {SetupSolutionContainerComponent} from "./tutorials/basics/1-setup/setup-solution-container.component";
import {CombinationOperatorsComponent} from "./combination-operators/combination-operators.component";
import {ErrorHandlingComponent} from "./error-handling/error-handling.component";

export const routes: Routes = [
  {
    path: 'error-handling',
    component: ErrorHandlingComponent
  },
  {
    path: 'mem-leak',
    component: MemLeakParentComponent
  },
  {
    path: 'resize-observer',
    component: ResizeComponent
  },
  {
    path: 'combination-operators',
    component: CombinationOperatorsComponent
  },
  {
    path: 'tutorial',
    component: SetupContainerComponent
  },
  {
    path: 'tutorial-solution',
    component: SetupSolutionContainerComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
