import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioBasicComponent } from './portfolio-basic.component';

const routes: Routes = [
  { path: '', component: PortfolioBasicComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioBasicRoutingModule { }
