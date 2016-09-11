import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UiService {
    // Observable boolean sources
    private navStateSource = new Subject<boolean>();
    private _chapter: Subject<number> = new Subject<number>();

    chapters: string;
    // Observable boolean streams
    navState$ = this.navStateSource.asObservable();
    chapter = this._chapter.asObservable();

    // Service message commands
    changeNavState(showNav: boolean) {
        this.navStateSource.next(showNav);
    }

    changeChapter( chapter: number) {
        this._chapter.next(chapter);
    }
}