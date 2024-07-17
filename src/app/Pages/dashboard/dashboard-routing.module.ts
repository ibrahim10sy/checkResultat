import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { StatistiqueComponent } from '../statistique/statistique.component';
import { ExamensComponent } from '../examens/examens.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
      { path: 'statistique', component: StatistiqueComponent },
      { path: 'examen', component: ExamensComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
