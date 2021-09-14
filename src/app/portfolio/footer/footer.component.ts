import { Component, OnInit } from '@angular/core';
import { InformationService } from 'src/app/shared/http-services/information.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  social_media = this.infoService.social_media;

  constructor(private infoService: InformationService) { }
}
