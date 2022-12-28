import { Component, Input, OnInit } from '@angular/core';
import { JobDetail } from 'src/app/interfaces/job-details';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {

  @Input() data!: JobDetail;

  constructor() { }

  ngOnInit(): void {
  }

}
