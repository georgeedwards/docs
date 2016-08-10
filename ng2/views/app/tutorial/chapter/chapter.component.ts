import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute }       from '@angular/router';

@Component({
  selector: 'tutorial',
  template: `<div [innerHTML]="content"></div>`
})
export class chapterComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute
  ) { }
  private sub: Subscription;
  private content: string = '';

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      var id: string = params['id'];
      this.content = id;
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}