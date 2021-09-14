import { InformationService } from 'src/app/shared/http-services/information.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  about = this.infoService.about;

  constructor(private infoService: InformationService) { }

}
