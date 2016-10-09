import { Component } from '@angular/core';
import { UiService} from '../../service/ui.service';

@Component({
  selector: 'home',
  templateUrl: '../../../client/components/home/home.html',
  styleUrls: ['../../../client/components/home/home.css']
})
export class homeComponent {
  constructor(private uiService: UiService) {
    this.uiService.changeNavState(false); //hide nav bars
  }
}
