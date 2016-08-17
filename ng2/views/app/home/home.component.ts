import { Component } from '@angular/core';
import { UiService} from '../shared/ui.service';

@Component({
  selector: 'home',
  templateUrl: 'app/home/home.html',
  styleUrls: ['app/home/home.css']
})
export class homeComponent {
  constructor(private uiService: UiService) {
    this.uiService.changeNavState(false); //hide nav bars
  }
}
