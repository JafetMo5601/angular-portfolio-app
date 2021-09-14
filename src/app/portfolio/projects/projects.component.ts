import { Component, OnInit } from '@angular/core';
import { InformationService } from 'src/app/shared/http-services/information.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects: object[] = this.infoService.projects;

  constructor(private infoService: InformationService) { }

}
