import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  template: `
  <div class="ui right labeled big input" id="input">
    <label for="email" class="ui label" id="label">contact me!</label>
    <label *ngIf="submitted" class="ui label"  id="slide1">thanks!</label>
    <input placeholder="email@domain" id="email" type="email">
    <input *ngIf="submitted" placeholder="email@domain" id="slide2" type="email">
    <div class="ui label" id="emailSubmit" (click)="submit()">
        <p *ngIf="!submitted" class="submitText">submit</p>
        <i *ngIf="submitted" class="notched circle loading icon" id="spinner"></i>
    </div>
  </div>
  `,
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  @HostBinding('style.position') position = 'relative';
  submitted: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.submitted = false;
  }

  slide(elementId: string): void {
    const slider = document.getElementById(elementId);
    slider.classList.add('submitted');
  }

  // click starts animation, then routes to about
  submit() {
    if (!this.submitted) {
      this.submitted = true;
      setTimeout(() => {
        this.slide('slide1');
        this.slide('slide2');
        // this.slide('emailSubmit');
      }, 2);
      // setTimeout(() => {
      //   this.router.navigate(['about']);
      // }, 2000);
    } else {
      return;
    }
  }

  // TODO: Disable on invalid
}
