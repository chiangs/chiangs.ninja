import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  template: `
  <div class="container image-grid">
    <div *ngFor="let photo of gallery" [class]="photo.class">
      <img [src]="photo.path" [alt]="photo.description">
    </div>
  </div>
  `,
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() gallery: { class: string; path: string; description: string }[];

  constructor() {}

  ngOnInit() {}
}
