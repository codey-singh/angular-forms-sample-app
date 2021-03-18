import { Component } from '@angular/core';
import {
  AbstractControlOptions,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-app';
  mainForm: FormGroup;
  applicantForm: FormGroup;
  applicantFormConfig: any;

  constructor(public fb: FormBuilder) {
    this.applicantFormConfig = {
      applicantName: ['', [Validators.required]],
      applicantAge: ['', [Validators.required]],
      applicantGender: ['', [Validators.required]],
    };

    this.applicantForm = this.fb.group(this.applicantFormConfig);

    this.mainForm = this.fb.group({
      title: ['', [Validators.required]],
      somethingElse: ['', [Validators.required]],
      applicants: fb.array([this.applicantForm]),
    });
  }

  getApplicantForm(): FormArray {
    return this.mainForm.get('applicants') as FormArray;
  }

  generateOneMoreApplicant() {
    this.getApplicantForm().push(this.fb.group(this.applicantFormConfig));
  }

  submitForm() {
    alert(this.mainForm.value);
    console.log('FormValue', this.mainForm.value);
  }
}
