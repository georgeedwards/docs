import { Component, ViewEncapsulation, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { UiService} from '../shared/ui.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { chapterComponent } from './chapter/chapter.component';

@Component({
  selector: 'tutorial',
  templateUrl: 'app/tutorial/tutorial.html',
  styleUrls: ['./app/tutorial/tutorial.css'],
  encapsulation: ViewEncapsulation.None
})

export class tutorialComponent {
  public chapters = _chapters;
  clickedItem: number = 0;
  @ViewChild('chapter') chapter;

  constructor(private uiService: UiService, private route: ActivatedRoute, private router: Router) {
    this.uiService.changeNavState(true); //display nav bars
    this.route.params.forEach(p => this.doScroll());
    this.uiService.chapter.forEach(c => {this.clickedItem = c})
  }


  doScroll() {
    if (this.chapter !== undefined) {
      this.chapter.nativeElement.scrollTop = 0;
    }
  }

  previous() {
    if (this.clickedItem !== 0) {
      var previous = this.clickedItem - 1;
      console.log(previous);
      let link = ['/tutorial/chapter', previous];
      this.router.navigate(link);
    }
  }

  next() {
    if (this.clickedItem !== 6) {
      var next = this.clickedItem + 1;
      console.log(next);
      let link = ['/tutorial/chapter', next];
      this.router.navigate(link);
    }
  }

  isStart() {
    if (this.clickedItem == 0) {
      return 'grey';
    }
  }

  isEnd() {
    if (this.clickedItem == 6) {
      return 'grey';
    }
  }

  shas = {
    '1': '95854756de842ff45ebbf9d3703cc7eff1557d5a',
    '2': '13b948cc246b3c9b383c4be24ca0ba0a7c072e67',
    '3': 'd29ae903c17e342423ac30fe4c5d10dc65876c18',
    '4': 'd5d37719e5768b54be28183d57a14c0f2863ccbe',
    '5': '2a501710baa09e53af27388a364246656d2de782',
    '6': '2080f0bf0acc61628909df340aa03ead722a42c8'
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