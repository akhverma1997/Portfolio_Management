import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Component({
  selector: 'app-error-block',
  template: '<div *ngIf="allErrors.length && this.errorForm.controls[this.controlField].touched" class="error-block"><span class="error-message" *ngFor="let error of allErrors">{{error}}</span></div>',
  styles: [
      '.error-message { width: 100%; height: auto;}', 
      '.error-block { display: flex; flex-direction: column; }'
    ]
})
export class ErrorBlockComponent implements OnChanges {
  @Input() errorForm: any;
  @Input() controlField: string;
  @Input() invalidValue: any;
  allErrors: any = [];
  allInvalidValues: any;

  constructor(
    private translate: TranslateService
  ) { }

  ngOnChanges() {
    this.allInvalidValues = {
        required: this.translate.getTranslated('shared.error-messages.required'),
        differentFields: this.translate.getTranslated('shared.error-messages.matchFields')
    }
    this.performChanges();
    this.detectChanges();
  }

  detectChanges() {
    Object.keys(this.errorForm.controls).map((item: any) => item).forEach((item: any) => {
      this.errorForm.controls[item].valueChanges.subscribe((ele: any) => {
        this.performChanges();
      });
    });
  }

  performChanges() {
    this.allErrors = [];
    this.errorForm.updateValueAndValidity();
    Object.keys(this.errorForm.controls[this.controlField].errors || {}).forEach(element => {
        if (this.invalidValue[element]) {
          const value = this.translate.getTranslated(this.invalidValue[element]) || this.allInvalidValues[element] || element;
          this.allErrors = this.allErrors.filter((item: any) => item !== value);
          this.allErrors.push(value);
        }
    });
    Object.keys(this.errorForm.errors || {}).forEach(element => {
      if (this.invalidValue[element]) {
        const value = this.translate.getTranslated(this.invalidValue[element]) || this.allInvalidValues[element] || element;
        this.allErrors = this.allErrors.filter((item: any) => item !== value);
        this.allErrors.push(value);
      }
    });
  }
}
