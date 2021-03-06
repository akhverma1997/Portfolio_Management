import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Pipe({name: 'translate'})
export class TranslatePipe implements PipeTransform {

    constructor(
        private translate: TranslateService
    ) { }

    transform(word: string) {
        return this.translate.getTranslated(word);
    }
}