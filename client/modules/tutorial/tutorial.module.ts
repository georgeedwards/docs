import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { tutorialRouting } from './tutorial.routes';
import { HttpModule } from '@angular/http';
import { TutorialComponent } from './tutorial.component';
import { ChapterComponent } from './chapter/chapter.component';

@NgModule({
  imports: [
    CommonModule,
    tutorialRouting,
    HttpModule
  ],
  declarations: [
    TutorialComponent,
    ChapterComponent
  ]
})
export class TutorialModule {}
