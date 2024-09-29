import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = 
[ 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home', loadChildren: () => import('./modules/page/home/home.module').then(m => m.HomeModule)},
  {path:'about-us', loadChildren: () => import('./modules/page/aboutus/aboutus.module').then(m => m.AboutusModule)},
  {path:'contact-us', loadChildren: () => import('./modules/page/contactus/contactus.module').then(m => m.ContactusModule)},
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation: 'enabledBlocking'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
