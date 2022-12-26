import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './shared/components/full-layout/full-layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FullLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
