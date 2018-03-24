import { Component, OnInit } from '@angular/core';
import { MeService } from '../../services/me.service';

@Component({
  selector: 'app-description',
  template: `
  <span class="landingS">
    <img src="./src/assets/images/icon-s.svg" alt="s-icon">
  </span>
  <h2 class="tagLine">{{ me.tagLine }}</h2>
  `,
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  constructor(private meSvc: MeService) {}

  ngOnInit() {}
}
