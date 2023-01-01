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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from '../core/interceptors/request.interceptor';

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
    MaterialModule,
    HttpClientModule
  ],
  exports: [
    FullLayoutComponent,
    ShortenArrayPipe,
    TimePassedPipe,
    ShortenTextPipe
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }
  ]
})
export class SharedModule { }
