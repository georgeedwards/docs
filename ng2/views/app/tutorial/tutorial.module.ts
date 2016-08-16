import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { tutorialRouting } from './tutorial.routes';
import { HttpModule } from '@angular/http';
import { TutorialService } from '../shared/tutorial.service';
import { tutorialComponent } from './tutorial.component';
import { chapterComponent } from './chapter/chapter.component';
import { RawHtmlPipe } from '../shared/http.pipe'
@NgModule({
  imports: [
    CommonModule,
    tutorialRouting,
    HttpModule
  ],
  declarations: [
    tutorialComponent,
    chapterComponent,
    RawHtmlPipe
  ],
  providers: [TutorialService]
})
export class tutorialModule {}