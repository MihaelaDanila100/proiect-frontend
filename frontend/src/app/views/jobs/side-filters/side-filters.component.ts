import { Component, OnInit } from '@angular/core';
import { Domain } from 'src/app/interfaces/domain';
import { DomainService } from 'src/app/services/domain.service';
import { LocationService } from 'src/app/services/location.service';
import { Location } from 'src/app/interfaces/location';
import { Experience } from 'src/app/shared/data/consts/experience';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-side-filters',
  templateUrl: './side-filters.component.html',
  styleUrls: ['./side-filters.component.scss']
})
export class SideFiltersComponent implements OnInit {

  public domainsOptions: Domain[] = [];
  public locationOptions: Location[] = [];
  public experienceOptions: string[] = Object.values(Experience);

  constructor(private domainService: DomainService,
    private locationService: LocationService) { }

  ngOnInit(): void {
    this.domainService.getDomains().subscribe((res) => {
      this.domainsOptions = res;
    });
    this.locationService.getLocations().subscribe((res) => {
      this.locationOptions = res;
    });
  }

  changeLocation(event: any): void {
    console.log("aha ", event)
  }

}
