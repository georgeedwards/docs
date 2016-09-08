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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.chapter = params['id'];
    });
  }
  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  previous() {
    console.log(this.chapter);
  }

  next() {

  }

  isStart() {

  }

  isEnd() {
    
  }
}
