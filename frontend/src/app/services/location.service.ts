import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Location } from '../interfaces/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private locations: Location[] = [
    {
      id: 1,
      name: 'Bucuresti'
    },
    {
      id: 2,
      name: 'Bucuresti'
    },
    {
      id: 3,
      name: 'Bucuresti'
    },
    {
      id: 4,
      name: 'Bucuresti'
    },
  ]

  constructor() { }

  public getLocations(): Observable<Location[]> {
    return of(this.locations);
  }
}
