import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsPannelComponent } from './jobs-pannel/jobs-pannel.component';
import { SideFiltersComponent } from './side-filters/side-filters.component';
import { JobCardComponent } from './job-card/job-card.component';
import { FilterSectionComponent } from './filter-section/filter-section.component';
import { OptionCardComponent } from './option-card/option-card.component';
import { ShortenArrayPipe } from 'src/app/shared/pipes/shorten-array.pipe';
import { SharedModule } from 'src/app/shared/shared.module';
import { TimePassedPipe } from 'src/app/shared/pipes/time-passed.pipe';
import { ShortenTextPipe } from 'src/app/shared/pipes/shorten-text.pipe';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { JobsLayoutComponent } from './jobs-layout/jobs-layout.component';

@NgModule({
  declarations: [
    JobsPannelComponent,
    SideFiltersComponent,
    JobCardComponent,
    FilterSectionComponent,
    OptionCardComponent,
    JobsLayoutComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    SharedModule,
    MaterialModule
  ],
  providers: [
    ShortenArrayPipe,
    TimePassedPipe,
    ShortenTextPipe
  ]
})
export class JobsModule { }
