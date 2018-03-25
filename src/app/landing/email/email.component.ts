import {
  Component,
  OnInit,
  HostBinding,
  EventEmitter,
  Output
} from '@angular/core';

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
  @Output() submitPressed: EventEmitter<any> = new EventEmitter();
  submitted: boolean;

  constructor() {}

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
      }, 2);
      this.submitPressed.emit('email submitted!');
    } else {
      return;
    }
  }

  // TODO: Disable on invalid
}
