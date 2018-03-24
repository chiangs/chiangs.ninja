import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
   <div class="item" *ngFor="let item of menuItems">
      <div class="content">
        <div class="ui massive header">
          <a [routerLink]="baseUrl + item.url">
            <h4><span class="redText">{{ item.redText }}</span> {{ item.rest }} </h4>
          </a>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @HostBinding('attr.class') class = 'ui animated link list';
  menuItems: { redText: string; rest: string; url: string }[];
  baseUrl = '/home/';

  constructor() {
    this.menuItems = [
      { redText: 'learn', rest: 'more about me', url: '' },
      { redText: 'view', rest: 'my projects', url: '' },
      { redText: 'blog', rest: '', url: '' }
    ];
  }

  ngOnInit() {}
}
