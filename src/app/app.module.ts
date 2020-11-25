import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { HistoryComponent } from './about-us/history/history.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './about-us/team/team.component';
import { PortfolioDetailsComponent } from './portfolio/portfolio-details/portfolio-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    OurServicesComponent,
    HistoryComponent,
    PortfolioComponent,
    TeamComponent,
    PortfolioDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
