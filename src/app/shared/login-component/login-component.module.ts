import { NgModule } from '@angular/core';
import { LoginComponent } from './login-component.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '../pipes/translate.pipe';
import { ErrorBlockComponent } from '../error-block/error-block.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent,
    ErrorBlockComponent,
    TranslatePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule { }
