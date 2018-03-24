import { Component, OnInit } from '@angular/core';
import { Me } from '../models/me.model';
import { MeService } from '../services/me.service';

@Component({
  selector: 'app-landing',
  template: `
    <div class="view" id="landing">
      <app-title [firstName]="me.firstName" [lastName]="me.lastName"></app-title>
      <app-email></app-email>
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

  constructor(private meSvc: MeService) {
    this.me = this.meSvc.getMe();
  }

  ngOnInit() {}
}
