import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/login-component/login-component.component';

const routes: Routes = [
  { path: 'portfolio', component: LoginComponent },
  { path: 'portfolio/basic', loadChildren: () => import('./portfolio-basic/portfolio-basic.module').then(m => m.PortfolioBasicModule) },
  { path: 'portfolio/advanced', loadChildren: () => import('./portfolio-advanced/portfolio-advanced.module').then(m => m.PortfolioAdvancedModule) },
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: '**', redirectTo: 'portfolio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
