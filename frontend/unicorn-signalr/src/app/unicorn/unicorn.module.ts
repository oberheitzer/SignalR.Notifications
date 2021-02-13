import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnicornRoutingModule } from './unicorn-routing.module';
import { UnicornsComponent } from './pages/unicorns.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UnicornsComponent],
  imports: [
    CommonModule,
    SharedModule,
    UnicornRoutingModule
  ]
})
export class UnicornModule { }
