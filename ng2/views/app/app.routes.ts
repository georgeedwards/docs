import { homeComponent } from './home/home.component';
import { pluginsComponent } from './plugins/plugins.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: homeComponent },
  { path: 'tutorial', loadChildren: 'tutorial/tutorial.module', pathMatch: 'prefix'},
  { path: 'plugins', component: pluginsComponent }
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);