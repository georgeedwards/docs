import {PipeTransform, Pipe} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Pipe({
    name: 'rawHtml'
})
export class RawHtmlPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {
    }

    public transform(value: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
}