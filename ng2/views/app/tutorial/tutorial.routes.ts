import { Routes, RouterModule } from '@angular/router';

import { tutorialComponent }    from './tutorial.component';
import { chapterComponent }  from './chapter/chapter.component';

const tutorialRoutes: Routes = [
  {
    path: 'tutorial',
    component: tutorialComponent,
    children: [
      { path: 'chapter/:id',  component: chapterComponent },
      { path: '', redirectTo: 'chapter/0', pathMatch: 'full'},
    ]
  }
];

export const tutorialRouting = RouterModule.forChild(tutorialRoutes);
