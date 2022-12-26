import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsPannelComponent } from './jobs-pannel/jobs-pannel.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: JobsPannelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
