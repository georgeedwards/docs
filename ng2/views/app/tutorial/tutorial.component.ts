import { Component, ViewEncapsulation, Output, EventEmitter, OnInit } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { chapterHelpComponent } from './chapterHelp/chapterHelp.component';
import { UiService} from '../shared/ui.service';

@Component({
  selector: 'tutorial',
  templateUrl: 'app/tutorial/tutorial.html',
  styleUrls: ['./app/tutorial/tutorial.css'],
  directives: [ROUTER_DIRECTIVES, chapterHelpComponent],
  encapsulation: ViewEncapsulation.None
})
export class tutorialComponent {
  public chapters = _chapters;
  clickedItem: number = 0;
    @Output() everySecond = new EventEmitter();

  constructor(private uiService: UiService) {
    this.uiService.changeNavState(true); //display nav bars
  }
}

const _chapters: _chapter[] = [
  { number: '0', title: 'Intro' },
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