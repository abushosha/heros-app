import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children : [
      {
        path: '',
        redirectTo: 'heros-list',
        pathMatch: 'full'
      },
      {
        path: 'heros-list',
        loadChildren: () => import('./pages/heros-list/heros-list.module').then(a => a.HerosListModule)
      },
      {
        path: 'hero-profile',
        loadChildren: () => import('./pages/hero-profile/hero-profile.module').then(a => a.HeroProfileModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
