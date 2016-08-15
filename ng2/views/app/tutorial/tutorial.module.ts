import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { tutorialRouting } from './tutorial.routes';
import { HttpModule } from '@angular/http';
import { TutorialService } from '../shared/tutorial.service';
import { tutorialComponent } from './tutorial.component';
import { chapterComponent } from './chapter/chapter.component';

@NgModule({
  imports: [
    CommonModule,
    tutorialRouting,
    HttpModule
  ],
  declarations: [
    tutorialComponent,
    chapterComponent
  ],
  providers: [TutorialService]
})
export class tutorialModule {}