import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ScreenLoadarComponent } from './components/screen-loadar/screen-loadar.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';




@NgModule({
  declarations: [FooterComponent,HeaderComponent,NavbarComponent,ScreenLoadarComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ScreenLoadarComponent
  ],
})
export class SharedModule { }
