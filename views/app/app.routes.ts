import { provideRouter, RouterConfig } from '@angular/router';
import { homeComponent } from './home/home.component';
import { tutorialComponent } from './tutorial/tutorial.component';

const routes: RouterConfig = [
  { path: '', component: homeComponent },
  { path: 'tutorial', component: tutorialComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
