import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <nav id="navbar">
    <ul id="navList">
        <li class="brand">
          <a [routerLink]="['/welcome']">Brand</a>
        </li>
        <li *ngFor="let item of menu">
            <a [routerLink]="[item.url]" 
            routerLinkActive="active"
            routerLinkActiveOptions="{exact: true}">{{ item.name }}</a>
        </li>
        <li id="socialMenu">@follow</li>
        <li id="blog">
          <a [routerLink]="['/blog']">blog</a>
        </li>
    </ul>
  </nav>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menu: { name: string; url: string }[];

  constructor() {
    this.menu = [
      { name: 'home', url: '/about' },
      { name: 'projects', url: '/projects' },
      { name: 'design', url: '/design' },
      { name: 'photography', url: '/photography' },
      { name: 'muay thai', url: '/muaythai' }
    ];
  }

  ngOnInit() {}
}
