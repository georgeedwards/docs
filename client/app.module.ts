import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AUTH_PROVIDERS } from 'angular2-jwt';

import { routing, appRoutingProviders } from './app.routes';
import { tutorialModule } from './modules/tutorial/tutorial.module';
import { UiService } from './service/ui.service';
import { AuthService } from './service/auth.service';
import { sidebarComponent } from './components/sidebar/sidebar.component';
import { homeComponent } from './components/home/home.component';
import { pluginsComponent } from './components/plugins/plugins.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    tutorialModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    homeComponent,
    sidebarComponent,
    pluginsComponent
  ],
  providers: [
    appRoutingProviders,
    UiService, AuthService,
    AUTH_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
