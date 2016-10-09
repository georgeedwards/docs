import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { AUTH_PROVIDERS, AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http } from '@angular/http';

import { routing, appRoutingProviders } from './app.routes';
import { AppComponent } from './app.component';
import { tutorialModule } from './modules/tutorial/tutorial.module';
import { UiService } from './service/ui.service';
import { AuthService } from './service/auth.service';
import { ApiService } from './service/api.service';
import { searchService } from './service/search.service';
import { sidebarComponent } from './components/sidebar/sidebar.component';
import { homeComponent } from './components/home/home.component';
import { pluginsComponent } from './components/plugins/plugins.component';


export function getAuthHttp(http: any) {
    return new AuthHttp(new AuthConfig({
      noJwtError: true,
      headerPrefix: 'JWT',
      globalHeaders: [{'Accept': 'application/json'}],
      tokenGetter: (() => sessionStorage.getItem('id_token')),
    }), http);
}

@NgModule({
  imports: [
    BrowserModule,
    routing,
    tutorialModule,
    FormsModule,
    HttpModule
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
    ApiService,
    searchService,
    AuthService,
    {
        provide: AuthHttp,
        useFactory: getAuthHttp,
        deps: [Http]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
