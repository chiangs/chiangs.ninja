import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  template: `
  <div class="ui right labeled big input" >
    <label *ngIf="!submitted" for="email" class="ui label">contact me</label>
    <label *ngIf="submitted" for="email" class="ui label" id="slider">thanks!</label>
    <input placeholder="email@domain" id="email" type="email">
    <div class="ui label" id="emailSubmit" (click)="submit()">
      <p *ngIf="!submitted" class="submitText">submit</p>
      <i *ngIf="submitted" class="notched circle loading icon"></i>
    </div>
  </div>
  `,
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  submitted: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.submitted = false;
  }

  slide(): void {
    const slider = document.getElementById('slider');
    slider.classList.add('submitted');
  }

  // click starts animation, then routes to about
  submit() {
    this.submitted = true;
    setTimeout(() => {
      this.slide();
    }, 500);
    // setTimeout(() => {
    //   this.router.navigate(['about']);
    // }, 1500);
  }

  // TODO: Disable on invalid
  // TODO: try animated version of each part of the input instead and stage them 0 - 100%;
}
