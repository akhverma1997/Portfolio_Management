import { NgModule } from '@angular/core';
import { PortfolioBasicComponent } from './portfolio-basic.component';
import { PortfolioBasicRoutingModule } from './portfolio-basic-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared-common.module';

@NgModule({
  declarations: [
    PortfolioBasicComponent
  ],
  imports: [
    CommonModule,
    PortfolioBasicRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [PortfolioBasicComponent]
})
export class PortfolioBasicModule { }
