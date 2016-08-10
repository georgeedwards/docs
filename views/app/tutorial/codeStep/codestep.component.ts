import { Component, Input } from '@angular/core';

@Component({
    selector: 'codestep',
    template: `<div [innerHTML]="content"></div>`
})
export class codeStepComponent {
    @Input() step: string;

    private content: string = '';

    ngOnInit() {
        if (this.step.toString() === "2.1") {
            this.content = "<p>bar Test</p>"; //should get html from rendered patch files
        }
    }
}
