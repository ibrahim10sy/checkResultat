import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Pub {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  targetUrl: string;
}


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent  {

  constructor(private router: Router){

  }

  pubs = [
    {
        id: 1,
        title: "Summer Sale",
        description: "Get up to 50% off on all summer clothing!",
        imageUrl: "https://example.com/images/summer-sale.jpg",
        targetUrl: "https://example.com/summer-sale"
    },
    {
        id: 2,
        title: "New Smartphone Launch",
        description: "Discover the latest features of our new smartphone. Pre-order now!",
        imageUrl: "https://example.com/images/smartphone-launch.jpg",
        targetUrl: "https://example.com/smartphone-launch"
    },
    {
        id: 3,
        title: "Travel Deals",
        description: "Book your dream vacation with our exclusive travel deals.",
        imageUrl: "https://example.com/images/travel-deals.jpg",
        targetUrl: "https://example.com/travel-deals"
    },
    {
        id: 4,
        title: "Fitness Gear",
        description: "Upgrade your workout with our new line of fitness gear.",
        imageUrl: "https://example.com/images/fitness-gear.jpg",
        targetUrl: "https://example.com/fitness-gear"
    },
    {
        id: 5,
        title: "Home Appliances Discount",
        description: "Save big on home appliances this weekend only!",
        imageUrl: "https://example.com/images/home-appliances.jpg",
        targetUrl: "https://example.com/home-appliances"
    }
];

  // setInterval()

gotoConnection() {

  this.router.navigate(['/login',]);
}
}
