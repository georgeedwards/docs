import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { tutorialRouting } from './tutorial.routes';

import { tutorialComponent } from './tutorial.component';
import { chapterComponent } from './chapter/chapter.component';

@NgModule({
  imports: [
    CommonModule,
    tutorialRouting
  ],
  declarations: [
    tutorialComponent,
    chapterComponent
  ],
  providers: []
})
export class tutorialModule {}