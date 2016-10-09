import { HomeComponent } from './components/home/home.component';
import { PluginsComponent } from './components/plugins/plugins.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tutorial', loadChildren: 'tutorial/tutorial.module', pathMatch: 'prefix'},
  { path: 'plugins', component: PluginsComponent }
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
