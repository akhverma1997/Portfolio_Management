import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioAdvancedComponent } from './portfolio-advanced.component';

const routes: Routes = [
  { path: '', component: PortfolioAdvancedComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioAdvancedRoutingModule { }
