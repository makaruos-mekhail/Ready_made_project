import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ContactusComponent } from './page/contactus/contactus.component';
import { AboutusComponent } from './page/aboutus/aboutus.component';

const routes: Routes = [
  { path: 'contact-us', component: ContactusComponent },
  { path: 'about-us', component: AboutusComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
