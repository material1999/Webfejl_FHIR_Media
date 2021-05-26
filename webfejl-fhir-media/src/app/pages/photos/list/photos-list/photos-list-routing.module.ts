import { PhotosListComponent } from './photos-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: PhotosListComponent,
        data: { title: 'Photos - FHIR_Media' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PhotosListRoutingModule { }