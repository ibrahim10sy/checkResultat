import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [ RouterModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  @Input() collapsed = false;
  @Input() screenWidht = 0;


  getBodyClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screenWidht > 768){
      styleClass = 'body-trimmed';
    } else if(this.collapsed && this.screenWidht <= 768 && this.screenWidht >0){
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }
}
