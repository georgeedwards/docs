import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { homeComponent } from './home/home.component';
import { AppComponent }  from './app.component';
import { routing, appRoutingProviders } from './app.routes';
import { tutorialModule } from './tutorial/tutorial.module';
import { UiService } from './shared/ui.service';

@NgModule({
  imports: [ BrowserModule, routing, tutorialModule ],
  declarations: [ AppComponent, homeComponent ],
  providers: [
    appRoutingProviders, UiService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
