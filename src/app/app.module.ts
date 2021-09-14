import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProjectsComponent } from './portfolio/projects/projects.component';
import { ContactComponent } from './portfolio/contact/contact.component';
import { AwardsComponent } from './portfolio/awards/awards.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './portfolio/about/about.component';
import { CoverComponent } from './portfolio/cover/cover.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './portfolio/header/header.component';
import { FooterComponent } from './portfolio/footer/footer.component';
import { InformationService } from './shared/http-services/information.service';


const appRoutes: Routes = [
  { path: '', component: PortfolioComponent }
]


@NgModule({
  declarations: [
    PortfolioComponent,
    ProjectsComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    AwardsComponent,
    AboutComponent,
    CoverComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    InformationService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
