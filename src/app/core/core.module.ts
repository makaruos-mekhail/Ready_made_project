import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationModule } from './translation/translation.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslationModule,
    SharedModule
  ],
  exports:[
    TranslationModule,
    SharedModule
  ]
})
export class CoreModule { }
