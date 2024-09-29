import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
// import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent, //appAnimate ضرورى هنا

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule.forChild(routes),
    SharedModule,
    TranslateModule,
    ReactiveFormsModule,
    // AnimateOnScrollModule,
  ]
})
export class HomeModule { }
