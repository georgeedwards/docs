import {PipeTransform, Pipe} from '@angular/core';
import {DomSanitizationService, SafeHtml} from '@angular/platform-browser';

@Pipe({
    name: 'rawHtml'
})
export class RawHtmlPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizationService) {
    }

    public transform(value: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
}