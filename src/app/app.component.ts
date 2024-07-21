import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './Pages/body/body.component';
import { SidebarComponent } from './Pages/sidebar/sidebar.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { LoginComponent } from './Pages/login/login.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

interface SideNavToggle {
  screenWidht : number;
  collapsed : boolean;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatDialogModule,
    HomePageComponent,
    RouterLink, RouterLinkActive,
    BodyComponent,
    MatFormFieldModule,
    SidebarComponent,
    DashboardComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'checkResult';

}
