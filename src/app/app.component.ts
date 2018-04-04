import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar *ngIf="!isLanding"></app-navbar>
    <router-outlet role="main"></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLanding: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(res => {
      this.isLanding = this.router.url === '/welcome' ? true : false;
    });
  }
}
