import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  isSidebarOpen: boolean = false;

  constructor(private route: Router, @Inject(PLATFORM_ID) private platformId : object){

  }

  toggleSidebar(){
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  Logout(){
    if(isPlatformBrowser(this.platformId)){
      localStorage.clear();
    }
    this.route.navigate(['login']);
  }
}
