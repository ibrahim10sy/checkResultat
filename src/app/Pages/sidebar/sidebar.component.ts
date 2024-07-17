import { Component, EventEmitter, HostListener, NgModule, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { navbarData } from './nav-data';
import { CommonModule } from '@angular/common';


interface SideNavToggle {
  screenWidht : number,
  collapsed : boolean
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  collapsed = false;
  navData = navbarData;
  screenWidht=0;

 
 

  constructor(private routers: Router){
   
  }
  ngOnInit(): void {
    this.screenWidht = window.innerWidth;
  }

  
  @HostListener('window:resize', ['$event'])
  onResize(event : any){
    this.screenWidht = window.innerWidth;
    if(this.screenWidht == window.innerWidth){
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidht: this.screenWidht});
    }
  }
  toggleCollapse() : void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidht: this.screenWidht});
  }
  closeSidenav() : void{
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidht: this.screenWidht});
  }
  
}
