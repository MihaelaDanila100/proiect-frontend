import { Component, OnInit } from '@angular/core';
import { JobDetail } from 'src/app/interfaces/job-details';
import { JobsService } from 'src/app/services/jobs.service';
import { WORKFORM } from 'src/app/shared/data/consts/work-form';

@Component({
  selector: 'app-jobs-pannel',
  templateUrl: './jobs-pannel.component.html',
  styleUrls: ['./jobs-pannel.component.scss']
})
export class JobsPannelComponent implements OnInit {

  public workCategories:any = Object.values(WORKFORM);
  public jobs: JobDetail[] = [];

  constructor(private jobService: JobsService) { }

  ngOnInit(): void {
    this.jobService.getAllJobsDetailed().subscribe((res) => {
      this.jobs = res;
    });
  }

}
