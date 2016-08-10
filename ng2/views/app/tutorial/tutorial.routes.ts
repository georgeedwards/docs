import { Routes, RouterModule } from '@angular/router';

import { tutorialComponent }    from './tutorial.component';
import { chapterComponent }  from './chapter/chapter.component';

const tutorialRoutes: Routes = [
  { path: 'tutorial',  component: tutorialComponent },
  { path: 'tutorial/chapter/:id', component: chapterComponent }
];

export const tutorialRouting = RouterModule.forChild(tutorialRoutes);
