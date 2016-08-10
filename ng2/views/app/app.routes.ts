import { homeComponent } from './home/home.component';
import { tutorialComponent } from './tutorial/tutorial.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: homeComponent }
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);