import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { FullLayoutComponent } from './components/full-layout/full-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'
import { ShortenArrayPipe } from './pipes/shorten-array.pipe';


@NgModule({
  declarations: [
    IconButtonComponent,
    NavbarComponent,
    FullLayoutComponent,
    ShortenArrayPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  exports: [
    FullLayoutComponent,
    ShortenArrayPipe
  ]
})
export class SharedModule { }
