import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsLayoutComponent } from './jobs-layout/jobs-layout.component';
import { JobsPannelComponent } from './jobs-pannel/jobs-pannel.component';

const routes: Routes = [
  {
    path: '',
    component: JobsLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'pannel',
        pathMatch: 'full'
      }, {
        path: 'pannel',
        component: JobsPannelComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
