import { Component, Input } from '@angular/core';
import { TutorialService } from '../../shared/tutorial.service';

@Component({
    selector: 'codestep',
    template: `<a href={{gitURL}}><div class="codestep" [innerHTML]="content|rawHtml"></div>`
})
export class codeStepComponent {
    @Input() step: string;
    errorMessage: string;
    private content: string = '';
    //private chapterURL;
    public gitURL = 'git/2.1.txt';  // URL to web API

    constructor(private tutorialService: TutorialService) { }

    ngOnInit() {
        var chapterURL = './diff/' + this.step + '.html';
        this.tutorialService.getContents(chapterURL)
            .subscribe(
            diffStep => this.content = diffStep,
            error => this.errorMessage = <any>error);

        var url = './git/' + this.step + '.txt';
        this.tutorialService.getContents(url)
            .subscribe(
            hash => this.gitURL = hash,
            error => this.errorMessage = <any>error);

    }
}