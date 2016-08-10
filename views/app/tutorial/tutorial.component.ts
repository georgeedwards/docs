import { Component } from '@angular/core';
import { codeStepComponent } from './codeStep/codestep.component';
import { Routes, RouterModule }   from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'tutorial',
  templateUrl: 'app/tutorial/tutorial.html',
  styleUrls: ['app/tutorial/tutorial.css'],
  directives: [codeStepComponent, ROUTER_DIRECTIVES]
})
export class tutorialComponent {
    public chapters = _chapters;
    clickedItem: number = 0;
 }

const _chapters: _chapter[] = [
  { number: '1', title: 'Getting Started' },
  { number: '2', title: 'Building the UI' },
  { number: '3', title: 'Application Logic' },
  { number: '4', title: 'Nativescript Modules' },
  { number: '5', title: 'Using Plugins' },
  { number: '6', title: 'Using Native APIs' }
  ];

export class _chapter {
  number: string
  title: string;
}