import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  template: `
    <p>
      description works!
    </p>
  `,
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
