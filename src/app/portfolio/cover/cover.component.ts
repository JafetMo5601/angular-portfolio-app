import { InformationService } from 'src/app/shared/http-services/information.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent {
  
  quote: string = this.infoService.quote;

  constructor(private infoService: InformationService) { }
}
