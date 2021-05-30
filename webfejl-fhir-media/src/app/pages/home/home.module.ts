import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavModule } from './../nav/nav.module';
import { ChangeMailComponent } from '../change-mail/change-mail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { SplashScreenModule } from '../splash-screen/splash-screen.module';
import { MatIconModule } from '@angular/material/icon';
import { MediaAddComponent } from '../media-add/media-add.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [HomeComponent, ChangeMailComponent, MediaAddComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    RouterModule,
    SplashScreenModule,
    MatIconModule,
    MatSelectModule
  ],
  entryComponents: [ChangeMailComponent, MediaAddComponent],
})
export class HomeModule {}
