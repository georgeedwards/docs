import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'chapter',
  templateUrl: 'app/tutorial/chapter/chapter.html',
  styleUrls: ['./app/tutorial/chapter/chapter.css']
})
export class chapterComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  private content: string = '';
  errorMessage: string;
  chapter: string;
  sha: string;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.forEach(p => this.doScroll());
   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.chapter = params['id'];
    });
    console.log("INIT");
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  previous() {
    if (this.chapter !== '0') {
      var previous = parseInt(this.chapter) - 1;
      console.log(previous);
      let link = ['/tutorial/chapter', previous];
      this.router.navigate(link);
    }
  }

  next() {
    if (this.chapter !== '6') {
      var next = parseInt(this.chapter) + 1;
      console.log(next);
      let link = ['/tutorial/chapter', next];
      this.router.navigate(link);
    }
  }

  isStart() {
    if (this.chapter == '0') {
      return 'grey';
    }
  }

  isEnd() {
    if (this.chapter == '6') {
      return 'grey';
    }
  }

  doScroll() {
    
  }
  /* Shouldn't be statically defined */
   shas = {
    '1': '95854756de842ff45ebbf9d3703cc7eff1557d5a',
    '2': '13b948cc246b3c9b383c4be24ca0ba0a7c072e67',
    '3': 'd29ae903c17e342423ac30fe4c5d10dc65876c18',
    '4': 'd5d37719e5768b54be28183d57a14c0f2863ccbe',
    '5': '2a501710baa09e53af27388a364246656d2de782',
    '6': '2080f0bf0acc61628909df340aa03ead722a42c8'
  }
}
