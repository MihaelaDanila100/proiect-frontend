import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private url = `${environment.API_BASE_URl}/locations`;

  constructor(private httpClient: HttpClient) { }

  public getLocations(): Observable<any> {
    return this.httpClient.get(this.url);
  }
}
