import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <app-navbar></app-navbar>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
