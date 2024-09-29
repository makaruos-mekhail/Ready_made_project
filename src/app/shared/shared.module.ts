import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ScreenLoadarComponent } from './components/screen-loadar/screen-loadar.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AnimateDirective } from './Animate-Directive/animate.directive';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [FooterComponent, HeaderComponent, ScreenLoadarComponent, AnimateDirective],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ScreenLoadarComponent,
    AnimateDirective,
    FormsModule
  ],
})
export class SharedModule { }
