import { Component } from '@angular/core';
import { UiService} from '../shared/ui.service';

@Component({
  selector: 'home',
  templateUrl: 'app/plugins/plugins.html',
  styleUrls: ['app/plugins/plugins.css']
})
export class pluginsComponent {
  constructor(private uiService: UiService) {
    this.uiService.changeNavState(true); //show nav bars
  }
}
