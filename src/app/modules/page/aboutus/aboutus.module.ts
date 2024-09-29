import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutusRoutingModule } from './aboutus-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
// import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus.component';

const routes: Routes = [
  { path: '', component: AboutusComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AboutusRoutingModule,
    RouterModule.forChild(routes),
    SharedModule,
    TranslateModule,
    ReactiveFormsModule,
    // AnimateOnScrollModule
  ]
})
export class AboutusModule { }
