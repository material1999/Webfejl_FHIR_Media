import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashScreenComponent } from './splash-screen.component';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { ContainerModule } from './../../shared/components/container/container/container.module';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';

@NgModule({
  declarations: [
    SplashScreenComponent
  ],
  imports: [
    CommonModule,
    MatRippleModule,
    MatCardModule,
    RouterModule,
    ContainerModule,
    OnHoverModule
  ],
  exports: [SplashScreenComponent]
})
export class SplashScreenModule { }
