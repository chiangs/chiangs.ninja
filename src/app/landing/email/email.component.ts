import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  template: `
  <div class="ui right labeled big input">
    <label for="email" class="ui label">contact me</label>
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

  // click starts animation, then routes to about
  submit() {
    this.submitted = true;
    setTimeout(() => {
      this.router.navigate(['about']);
    }, 1500);
  }
}
