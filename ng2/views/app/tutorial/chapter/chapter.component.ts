import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import {SafeResourceUrl, DomSanitizationService} from '@angular/platform-browser';
import { codeStepComponent } from '../codeStep/codestep.component';
import { TutorialService } from '../../shared/tutorial.service';
import {Codeblock} from 'ng2-prism/codeblock';
import {Javascript, Css, Bash} from 'ng2-prism/languages';

@Component({
  selector: 'chapter',
  templateUrl: 'app/tutorial/chapter/chapter.html',
  styleUrls: ['./app/tutorial/chapter/chapter.css'],
  directives: [codeStepComponent, Codeblock, Javascript, Css, Bash]
})
export class chapterComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  private content: string = '';
  errorMessage: string;
  chapter: string;

  constructor(private route: ActivatedRoute/*, private tutorialService: TutorialService*/) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.chapter = params['id'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}