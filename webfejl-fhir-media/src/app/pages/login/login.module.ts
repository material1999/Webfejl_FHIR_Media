import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { RegistrationComponent } from '../registration/registration.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    LoginRoutingModule,
    MatDialogModule
  ],
  entryComponents: [RegistrationComponent],
  exports: [LoginComponent]
})
export class LoginModule {}
