import { Component, OnInit } from '@angular/core';
import { InformationService } from 'src/app/shared/http-services/information.service';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent {

  awards: object[] = this.infoService.awards;

  constructor(private infoService: InformationService) { }
}
