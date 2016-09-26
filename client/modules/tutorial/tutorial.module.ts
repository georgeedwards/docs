import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { tutorialRouting } from './tutorial.routes';
import { HttpModule } from '@angular/http';
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
  ]
})
export class tutorialModule {}