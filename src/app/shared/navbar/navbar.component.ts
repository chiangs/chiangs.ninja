import { Component, OnInit } from '@angular/core';
import { MeService } from '../../services/me.service';
import { Me } from '../../models/me.model';

@Component({
  selector: 'app-navbar',
  template: `
  <nav id="navbar">
    <ul id="navList">
        <li class="brand">
          <a [routerLink]="['/welcome']">
            <img src="../../../assets/images/icon-s.svg" alt="s-icon">
          </a>
        </li>
        <li class="items" *ngFor="let item of menu">
            <a [routerLink]="[item.url]" 
            routerLinkActive="active"
            routerLinkActiveOptions="{exact: true}">{{ item.name }}</a>
        </li>
        <li class="ui simple dropdown item" id="socialMenu">
            <span class="highlight">@</span>follow
            <i class="dropdown icon"></i>
            <div class="menu">
              <div class="item" *ngFor="let link of mySocial">
                <a href="{{ link.url }}" target="_blank">
                  <i class="{{ link.icon }} icon"></i>{{ link.icon }}
                </a>
              </div>
            </div>
        </li>
        <li id="blog">
          <a [routerLink]="['/blog']">blog</a>
        </li>
    </ul>
  </nav>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  me: Me;
  mySocial: { icon: string; url: string }[];
  menu: { name: string; url: string }[];

  constructor(private meSvc: MeService) {
    this.me = this.meSvc.getMe();
    this.menu = [
      { name: 'home', url: '/about' },
      { name: 'projects', url: '/projects' },
      { name: 'design', url: '/design' },
      { name: 'photography', url: '/photography' },
      { name: 'muay thai', url: '/muaythai' }
    ];
    this.mySocial = [
      this.me.linkedin,
      this.me.twitter,
      this.me.instagram,
      this.me.github
    ];
  }

  ngOnInit() {}
}
