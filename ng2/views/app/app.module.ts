import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { homeComponent } from './home/home.component';
import { tutorialComponent } from './tutorial/tutorial.component';
import { AppComponent }  from './app.component';
import { routing, appRoutingProviders } from './app.routes';

@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [ AppComponent, homeComponent, tutorialComponent ],
  providers: [
    appRoutingProviders
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
