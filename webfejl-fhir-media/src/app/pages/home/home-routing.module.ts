import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'splash',
        loadChildren: () =>
          import('./../splash-screen/splash-screen.module').then(
            (m) => m.SplashScreenModule
          ),
      },
      {
        path: 'photos',
        loadChildren: () =>
          import('./../photos/list/photos-list/photos-list.module').then(
            (m) => m.PhotosListModule
          ),
      },
      {
        path: 'videos',
        loadChildren: () =>
          import('./../videos/list/videos-list/videos-list.module').then(
            (m) => m.VideosListModule
          ),
      },
      {
        path: 'sounds',
        loadChildren: () =>
          import('./../sounds/list/sounds-list/sounds-list.module').then(
            (m) => m.SoundsListModule
          ),
      },
    ],
    canActivateChild: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
