import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus.component';

const routes: Routes = [
  {
    path: '', component: ContactusComponent,
    children: [
      // {
      //   path: 'category-item',
      //   loadChildren: () => import('./categories-item/cateitemchild.module').then(m => m.CateitemchildModule)
      // },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactusRoutingModule { }
