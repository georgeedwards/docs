import { Routes, RouterModule } from '@angular/router';
import { chapterComponent } from './chapter/chapter.component'
const appRoutes: Routes = [
    { path: 'chapter/:id', component: chapterComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);