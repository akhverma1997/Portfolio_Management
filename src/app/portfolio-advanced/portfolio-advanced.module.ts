import { NgModule } from '@angular/core';
import { PortfolioAdvancedComponent } from './portfolio-advanced.component';
import { PortfolioAdvancedRoutingModule } from './portfolio-advanced-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared-common.module';

@NgModule({
  declarations: [
    PortfolioAdvancedComponent
  ],
  imports: [
    CommonModule,
    PortfolioAdvancedRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [PortfolioAdvancedComponent]
})
export class PortfolioAdvancedModule { }
