import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'sobre', loadChildren: './sobre/sobre.module#SobrePageModule' },
  { path: 'eventos', loadChildren: './eventos/eventos.module#EventosPageModule' },
  { path: 'modal-evento', loadChildren: './modal-evento/modal-evento.module#ModalEventoPageModule' },
  { path: 'details/:id', loadChildren: './details/details.module#DetailsPageModule' },
  { path: 'details', loadChildren: './details/details.module#DetailsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
