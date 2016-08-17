import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
@Injectable()
export class UiService {
    // Observable boolean sources
    private navStateSource = new Subject<boolean>();

    // Observable boolean streams
    navState$ = this.navStateSource.asObservable();

    // Service message commands
    changeNavState(showNav: boolean) {
        this.navStateSource.next(showNav);
    }
}