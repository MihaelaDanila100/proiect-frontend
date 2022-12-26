import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.scss']
})
export class FilterSectionComponent implements OnInit {

  @Input() options!: any[];
  @Input() title!: string; 
  @Input() showSearch?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
