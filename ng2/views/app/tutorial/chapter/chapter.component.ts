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

}
