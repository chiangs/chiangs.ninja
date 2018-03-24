import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  template: `
    <div class="view" id="landing">
      <app-title></app-title>
      <app-email></app-email>
      <app-description></app-description>
      <app-process></app-process>
      <app-menu></app-menu>
    </div>
  `,
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
