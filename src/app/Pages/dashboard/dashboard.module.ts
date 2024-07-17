import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [],
  imports: [
    DashboardComponent,
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
