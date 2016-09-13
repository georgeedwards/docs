import { Component } from '@angular/core';
import { UiService} from '../shared/ui.service';
import { AuthService} from '../shared/auth.service';

@Component({
  selector: 'home',
  templateUrl: 'app/plugins/plugins.html',
  styleUrls: ['app/plugins/plugins.css']
})
export class pluginsComponent {
  constructor(private uiService: UiService, private authService: AuthService ) {
    this.uiService.changeNavState(true); //show nav bars
  }
}
