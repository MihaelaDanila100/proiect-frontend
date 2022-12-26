import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsPannelComponent } from './jobs-pannel/jobs-pannel.component';
import { SideFiltersComponent } from './side-filters/side-filters.component';
import { JobCardComponent } from './job-card/job-card.component';
import { FilterSectionComponent } from './filter-section/filter-section.component';
import { OptionCardComponent } from './option-card/option-card.component';


@NgModule({
  declarations: [
    JobsPannelComponent,
    SideFiltersComponent,
    JobCardComponent,
    FilterSectionComponent,
    OptionCardComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule
  ]
})
export class JobsModule { }
