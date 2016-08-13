import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import {SafeResourceUrl, DomSanitizationService} from '@angular/platform-browser';
declare var $: any; //Jquery declare
 
@Component({
  selector: 'chapter',
  template: `<div [innerHTML]="content"></div>`,
  styleUrls: ['./app/tutorial/chapter/chapter.css']
})
export class chapterComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  private content: string = '';
  private url: SafeResourceUrl;

  constructor( private route: ActivatedRoute) {  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      var id: string = params['id'];
      this.content = id;
      var that = this;
      var _url = './chapter/' + params['id'] + '.html';
      $.ajax({
        url: _url,
        success: function (result) {
          that.content = result;
        }
      });
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}