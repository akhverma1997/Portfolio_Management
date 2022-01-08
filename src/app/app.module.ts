import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicPortfolioComponent } from './public-portfolio/public-portfolio.component';
import { LoginModule } from './shared/login-component/login-component.module';

@NgModule({
  declarations: [
    AppComponent,
    PublicPortfolioComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    LoginModule,
    RouterModule,
    Ng2PageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
