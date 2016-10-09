import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UiService {
    chapters: string;
    // Observable boolean streams
    navState$ = this.navStateSource.asObservable();
    chapter = this._chapter.asObservable();

    // Observable boolean sources
    private navStateSource = new Subject<boolean>();
    private _chapter: Subject<number> = new Subject<number>();

    // Service message commands
    changeNavState(showNav: boolean) {
        this.navStateSource.next(showNav);
    }

    changeChapter(chapter: number) {
        this._chapter.next(chapter);
    }
}
