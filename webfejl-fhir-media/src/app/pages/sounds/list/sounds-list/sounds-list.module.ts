import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoundsListComponent } from './sounds-list.component';
import { SoundsListRoutingModule } from './sounds-list-routing.module';



@NgModule({
  declarations: [
    SoundsListComponent
  ],
  imports: [
    CommonModule,
    SoundsListRoutingModule
  ]
})
export class SoundsListModule { }
