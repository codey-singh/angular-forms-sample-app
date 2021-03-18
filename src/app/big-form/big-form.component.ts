import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-big-form',
  templateUrl: './big-form.component.html',
  styleUrls: ['./big-form.component.css'],
})
export class BigFormComponent implements OnInit {
  @Input() applicantForm: any;

  constructor() {}

  ngOnInit(): void {
    console.log('value', this.applicantForm);
  }
}
