import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import {SafeResourceUrl, DomSanitizationService} from '@angular/platform-browser';
import { codeStepComponent } from '../codeStep/codestep.component';
import { TutorialService } from '../../shared/tutorial.service';

@Component({
  selector: 'chapter',
  template: `<div [innerHTML]="content"></div>`,
  styleUrls: ['./app/tutorial/chapter/chapter.css'],
  directives: [codeStepComponent]
})
export class chapterComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  private content: string = '';
  errorMessage: string;

  constructor(private route: ActivatedRoute, private tutorialService: TutorialService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      var url = './chapter/' + params['id'] + '.html';
      this.tutorialService.getContents(url)
        .subscribe(
        chapterContent => this.content = chapterContent,
        error => this.errorMessage = <any>error);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}