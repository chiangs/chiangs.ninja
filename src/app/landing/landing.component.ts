import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Me } from '../models/me.model';
import { MeService } from '../services/me.service';

@Component({
  selector: 'app-landing',
  template: `
    <div class="view" id="landing">
      <app-title [firstName]="me.firstName" [lastName]="me.lastName"></app-title>
      <app-email (submitPressed)="onSubmit($event)"></app-email>
      <app-description [tagline]="me.tagline"></app-description>
      <app-process></app-process>
      <app-menu></app-menu>
    </div>
  `,
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  me: Me;
  title: string;

  constructor(private meSvc: MeService, private router: Router) {
    this.me = this.meSvc.getMe();
  }

  ngOnInit() {}

  // Decides what to do when email is submitted
  onSubmit() {
    setTimeout(() => {
      this.router.navigate(['about']);
    }, 2000);
  }
}
