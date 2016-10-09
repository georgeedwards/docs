import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorialComponent }    from './tutorial.component';
import { ChapterComponent }  from './chapter/chapter.component';

const tutorialRoutes: Routes = [
  {
    path: 'tutorial',
    component: TutorialComponent,
    children: [
      { path: 'chapter/:id',  component: ChapterComponent },
      { path: '', redirectTo: 'chapter/0', pathMatch: 'full'},
    ]
  }
];

export const tutorialRouting: ModuleWithProviders = RouterModule.forChild(tutorialRoutes);
