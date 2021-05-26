import { SoundsListComponent } from './sounds-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: SoundsListComponent,
        data: { title: 'Sounds - FHIR_Media' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SoundsListRoutingModule { }