import { Injectable } from '@angular/core';
import * as jsonData from '../json/en.json';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {

    allData: any = (jsonData as any).default;
    constructor() { }

    getTranslated(word: string) {
        const keysData = word.split('.');
        let data = this.allData;
        for (let eachKey of keysData) {
            if (data[eachKey]) {
                data = data[eachKey];
            } else {
                return word;
            }
        }
        if (data.length) {
            return data;
        }
        return word;
    }

}