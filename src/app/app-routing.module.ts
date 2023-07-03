import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TutorialBasicsModule} from "./tutorials/basics/tutorial-basics.module";
import {SetupContainerComponent} from "./tutorials/basics/1-setup/setup-container.component";
import {ResizeComponent} from "./resize/resize.component";
import {MemLeakComponent} from "./mem-leak/mem-leak.component";
import {MemLeakParentComponent} from "./mem-leak/mem-leak-parent.component";

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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
