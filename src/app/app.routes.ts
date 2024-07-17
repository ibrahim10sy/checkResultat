import { Routes } from '@angular/router';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { LoginComponent } from './Pages/login/login.component';
import { StatistiqueComponent } from './Pages/statistique/statistique.component';
import { ExamensComponent } from './Pages/examens/examens.component';

export const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./Pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: 'statistique', component: StatistiqueComponent},
    { path: 'examen', component: ExamensComponent},
    { path: 'home', component: HomePageComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' }, 
    { path: 'login', component: LoginComponent },
    { path: '**', component: PageNotFoundComponent },
  ];
