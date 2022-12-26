import { Component, OnInit } from '@angular/core';
import { WORKFORM } from 'src/app/shared/data/consts/work-form';

@Component({
  selector: 'app-jobs-pannel',
  templateUrl: './jobs-pannel.component.html',
  styleUrls: ['./jobs-pannel.component.scss']
})
export class JobsPannelComponent implements OnInit {

  public workCategories:any = Object.values(WORKFORM);

  constructor() { }

  ngOnInit(): void {
  }

}
