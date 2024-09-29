import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactusRoutingModule } from './contactus-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
// import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus.component';

const routes: Routes = [
  { path: '', component: ContactusComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactusRoutingModule,
    RouterModule.forChild(routes),
    SharedModule,
    TranslateModule,
    ReactiveFormsModule,
    // AnimateOnScrollModule
  ]
})
export class ContactusModule { }
