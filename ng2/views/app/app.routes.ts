import { homeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: homeComponent },
  { path: 'tutorial', loadChildren: 'tutorial/tutorial.module', pathMatch: 'prefix'}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);