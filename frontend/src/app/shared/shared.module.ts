import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { FullLayoutComponent } from './components/full-layout/full-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'
import { ShortenArrayPipe } from './pipes/shorten-array.pipe';
import { TimePassedPipe } from './pipes/time-passed.pipe';
import { ShortenTextPipe } from './pipes/shorten-text.pipe';
import { PopupsModule } from '../views/popups/popups.module';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    IconButtonComponent,
    NavbarComponent,
    FullLayoutComponent,
    ShortenArrayPipe,
    TimePassedPipe,
    ShortenTextPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    FullLayoutComponent,
    ShortenArrayPipe,
    TimePassedPipe,
    ShortenTextPipe
  ]
})
export class SharedModule { }
