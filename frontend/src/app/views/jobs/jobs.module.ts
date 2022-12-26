import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsPannelComponent } from './jobs-pannel/jobs-pannel.component';
import { SideFiltersComponent } from './side-filters/side-filters.component';
import { JobCardComponent } from './job-card/job-card.component';
import { FilterSectionComponent } from './filter-section/filter-section.component';
import { OptionCardComponent } from './option-card/option-card.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ShortenArrayPipe } from 'src/app/shared/pipes/shorten-array.pipe';
import { SharedModule } from 'src/app/shared/shared.module';

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
    JobsRoutingModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    SharedModule
  ],
  providers: [
    ShortenArrayPipe
  ]
})
export class JobsModule { }
