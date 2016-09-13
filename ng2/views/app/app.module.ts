import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { homeComponent } from './home/home.component';
import { pluginsComponent } from './plugins/plugins.component';
import { AppComponent }  from './app.component';
import { routing, appRoutingProviders } from './app.routes';
import { tutorialModule } from './tutorial/tutorial.module';
import { UiService } from './shared/ui.service';
import { sidebarComponent } from './sidebar/sidebar.component';
import { AuthService } from './shared/auth.service';

@NgModule({
  imports: [ BrowserModule, routing, tutorialModule ],
  declarations: [ AppComponent, homeComponent, sidebarComponent, pluginsComponent ],
  providers: [
    appRoutingProviders, UiService, AuthService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
