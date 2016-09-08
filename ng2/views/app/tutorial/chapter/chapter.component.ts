import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import {SafeResourceUrl, DomSanitizationService} from '@angular/platform-browser';
import { codeStepComponent } from '../codeStep/codestep.component';
import { TutorialService } from '../../shared/tutorial.service';

@Component({
  selector: 'chapter',
  templateUrl: 'app/tutorial/chapter/chapter.html',
  styleUrls: ['./app/tutorial/chapter/chapter.css'],
  directives: [codeStepComponent]
})
export class chapterComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  private content: string = '';
  errorMessage: string;
  chapter: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

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
}
