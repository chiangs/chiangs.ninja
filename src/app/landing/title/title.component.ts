import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <h1>
      <span class="title firstName">{{ firstName }}</span>
      <span class="title lastName">{{ lastName }}</span>
    </h1>
  `,
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input() firstName: string;
  @Input() lastName: string;

  constructor() {}

  ngOnInit() {}
}
