import { Component, OnInit } from '@angular/core';
import { MeService } from '../services/me.service';
import { Me } from '../models/me.model';

@Component({
  selector: 'app-photography',
  template: `
  <div class="ui center aligned basic segment">
    <div class="container header-grid">
      <div class="titles">
        <h1>{{ title }}</h1>
        <h2>{{ title2 }}</h2>
      </div>
      <div class="cta">
        <p>{{ cta }} <b>{{ ctaTech }}</b></p>
        <p>{{ cta2 }}</p>
      </div>
    </div>
  </div>
  <app-gallery [gallery]="gallery"></app-gallery>
  `,
  styleUrls: ['./photography.component.scss']
})
export class PhotographyComponent implements OnInit {
  isLanding = true;
  me: Me;
  title: string;
  title2: string;
  update: string;
  cta: string;
  ctaTech: string;
  cta2: string;
  gallery: { class: string; path: string; description: string }[];

  constructor() {
    this.title = `Photography`;
    this.title2 = `A creative outlet as a way to develop observational and detail-oriented aspects of problem-solving skills.`;
    this.cta = `This gallery is built with`;
    this.ctaTech = `CSS Grid`;
    this.cta2 = `Play around with the display size and check out the responsiveness as it shuffles the photos to reduce white space!`;
  }
  ngOnInit() {
    this.initGallery();
  }

  initGallery(): void {
    this.gallery = [
      {
        path: '../../assets/photography/bear-big.jpg',
        description: 'Wooden bear',
        class: 'big'
      },
      {
        path: '../../assets/photography/berlin-wide.jpg',
        description: 'berlin girl portrait',
        class: 'wide'
      },
      {
        path: '../../assets/photography/berlin.jpg',
        description: 'nazi sticker',
        class: ''
      },
      {
        path: '../../assets/photography/forest-tall.jpg',
        description: 'forest wanderer',
        class: 'tall'
      },
      {
        path: '../../assets/photography/lego-wide.jpg',
        description: 'lego family',
        class: 'wide'
      },
      {
        path: '../../assets/photography/lk-train.jpg',
        description: 'man on sri lankan train',
        class: ''
      },
      {
        path: '../../assets/photography/moab-wide.jpg',
        description: 'moab railroad',
        class: 'wide'
      },
      {
        path: '../../assets/photography/gc-tall.jpg',
        description: 'grand canyon',
        class: 'tall'
      },
      {
        path: '../../assets/photography/fy-big.jpg',
        description: 'fy',
        class: 'big'
      },
      {
        path: '../../assets/photography/moab-wide2.jpg',
        description: 'moab sunset',
        class: 'wide'
      },
      {
        path: '../../assets/photography/nm-wide.jpg',
        description: 'new mexico wall',
        class: 'wide'
      },
      {
        path: '../../assets/photography/nm-wide-2.jpg',
        description: 'new mexico tunnel',
        class: 'wide'
      },
      {
        path: '../../assets/photography/norway.jpg',
        description: 'utstein kloster',
        class: ''
      },
      {
        path: '../../assets/photography/lk-train-tall.jpg',
        description: 'girl on sri lankan train',
        class: 'tall'
      },
      {
        path: '../../assets/photography/norway-wide.jpg',
        description: 'norwegian bride',
        class: 'wide'
      },
      {
        path: '../../assets/photography/aarhus-canal.jpg',
        description: 'bike and canal in aarhus',
        class: ''
      },
      {
        path: '../../assets/photography/sicily-big.jpg',
        description: 'boy in sicily',
        class: 'big'
      },
      {
        path: '../../assets/photography/lk-tall.jpg',
        description: 'girl in kandy',
        class: 'tall'
      },
      {
        path: '../../assets/photography/lk-train-2.jpg',
        description: 'sunset sri lankan train',
        class: 'wide'
      },
      {
        path: '../../assets/photography/prague-wide.jpg',
        description: 'prague street',
        class: 'wide'
      },
      {
        path: '../../assets/photography/wine-tall.jpg',
        description: 'bolt wine rack',
        class: 'tall'
      }
    ];
  }
}
