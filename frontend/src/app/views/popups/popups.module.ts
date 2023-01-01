import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPopupComponent } from './login-popup/login-popup.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SignupPopupComponent } from './signup-popup/signup-popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginPopupComponent,
    SignupPopupComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PopupsModule { }
