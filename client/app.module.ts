import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http } from '@angular/http';

import { routing, appRoutingProviders } from './app.routes';
import { AppComponent } from './app.component';
import { TutorialModule } from './modules/tutorial/tutorial.module';
import { UiService } from './service/ui.service';
import { AuthService } from './service/auth.service';
import { ApiService } from './service/api.service';
import { SearchService } from './service/search.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { PluginsComponent } from './components/plugins/plugins.component';


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
    TutorialModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    PluginsComponent
  ],
  providers: [
    appRoutingProviders,
    UiService, AuthService,
    ApiService,
    SearchService,
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
