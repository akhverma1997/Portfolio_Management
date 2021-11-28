import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {

    constructor() { }

    static matchFields(controlOne: string, controlTwo: string): ValidatorFn {
        return (control: AbstractControl): { [key: string]: boolean } | null => {
            if (control.get(controlOne).value !== control.get(controlTwo).value) {
                return { 'differentFields': true};
            }
            return null;
        };
    }
}