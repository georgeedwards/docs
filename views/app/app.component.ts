import { Component } from '@angular/core';
import { sidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'my-app',
  template: `<sidebar></sidebar>
  <h1>helps</h1>`,
  directives: [sidebarComponent]
})
export class AppComponent { }
