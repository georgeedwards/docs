import { Component, Input } from '@angular/core';
import { TutorialService } from '../../shared/tutorial.service';

@Component({
    selector: 'codestep',
    template: `<div class="codestep" [innerHTML]="content"></div>`
})
export class codeStepComponent {
    @Input() step: string;
    errorMessage: string;
    private content: string = '';
    //private chapterURL;
    private chapterURL = 'git/2.1.txt';  // URL to web API

    constructor(private tutorialService: TutorialService) { }

    ngOnInit() {
        this.chapterURL = './diff/' + this.step + '.html';
        this.tutorialService.getContents(this.chapterURL)
            .subscribe(
            diffStep => this.content = diffStep,
            error => this.errorMessage = <any>error);
    }
}