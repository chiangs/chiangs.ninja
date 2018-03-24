import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-description',
  template: `
  <span class="landingS">
    <div class="landingIcon">
      <img src="../../../assets/images/icon-s.svg" alt="s-icon">
    </div>
    <div class="tagline">
      <h2>{{ tagline }}</h2>
    </div>
  </span>
  `,
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  @Input() tagline: string;
  constructor() {}

  ngOnInit() {}
}
