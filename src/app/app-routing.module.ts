import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HistoryComponent } from './about-us/history/history.component';
import { TeamComponent } from './about-us/team/team.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { PortfolioDetailsComponent } from './portfolio/portfolio-details/portfolio-details.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'team', component: TeamComponent },
  { path: 'services', component: OurServicesComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'portfolio-details', component: PortfolioDetailsComponent },
  { path: 'contact-us', component: ContactUsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
