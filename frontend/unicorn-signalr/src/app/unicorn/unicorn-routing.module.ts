import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnicornsComponent } from './pages/unicorns.component';

const routes: Routes = [
  {
    path: '',
    component: UnicornsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnicornRoutingModule { }
