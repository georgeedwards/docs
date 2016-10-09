import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { UiService } from '../../../service/ui.service';

@Component({
  selector: 'sg-chapter',
  templateUrl: '../../../../client/modules/tutorial/chapter/chapter.html',
  styleUrls: ['../../../../client/modules/tutorial/chapter/chapter.css']
})

export class ChapterComponent implements OnInit, OnDestroy {
  errorMessage: string;
  chapter: string;
  sha: string;
  private sub: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private uiService: UiService) {
    this.route.params.forEach(p => this.updateChapter(+p['id']));
   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.chapter = params['id'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  updateChapter(chapter: number) {
    this.uiService.changeChapter(chapter);
  }

}
