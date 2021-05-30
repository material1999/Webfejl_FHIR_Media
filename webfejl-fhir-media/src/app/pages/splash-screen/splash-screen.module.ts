import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashScreenComponent } from './splash-screen.component';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { ContainerModule } from './../../shared/components/container/container/container.module';



@NgModule({
  declarations: [
    SplashScreenComponent
  ],
  imports: [
    CommonModule,
    MatRippleModule,
    MatCardModule,
    RouterModule,
    ContainerModule
  ],
  exports: [SplashScreenComponent]
})
export class SplashScreenModule { }
