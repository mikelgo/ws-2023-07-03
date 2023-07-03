import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TutorialBasicsModule} from "./tutorials/basics/tutorial-basics.module";
import {SetupContainerComponent} from "./tutorials/basics/1-setup/setup-container.component";
import {ResizeComponent} from "./resize/resize.component";
import {MemLeakComponent} from "./mem-leak/mem-leak.component";
import {MemLeakParentComponent} from "./mem-leak/mem-leak-parent.component";
import {PresenterPatternSolution} from "./tutorials/basics/6-presenter-pattern/presenter-pattern.solutuion.component";
import {SideEffectsSolution} from "./tutorials/basics/5-side-effects/side-effects.solution.component";
import {SideEffectsContainerComponent} from "./tutorials/basics/5-side-effects/side-effects-container.component";
import {
  PresenterPatternContainerComponent
} from "./tutorials/basics/6-presenter-pattern/presenter-pattern.container.component";
import {SetupSolutionContainerComponent} from "./tutorials/basics/1-setup/setup-solution-container.component";

export const routes: Routes = [
  {
    path: 'mem-leak',
    component: MemLeakParentComponent
  },
  {
    path: 'resize-observer',
    component: ResizeComponent
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
