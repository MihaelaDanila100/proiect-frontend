import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.scss']
})
export class FilterSectionComponent implements OnInit {

  @Input() options!: any[];
  @Input() title!: string; 
  @Input() showSearch?: boolean;
  @Output() filterChanged: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  updateFilters(event: any, option: any): void {
    this.filterChanged.emit({
      value: option,
      checked: event.checked
    });
  }

}
