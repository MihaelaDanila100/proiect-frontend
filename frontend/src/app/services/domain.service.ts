import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Domain } from '../interfaces/domain';

@Injectable({
  providedIn: 'root'
})
export class DomainService {

  private domains: Domain[] = [
    {
      id: 1,
      name: 'Finante'
    },
    {
      id: 2,
      name: 'Finante'
    },
    {
      id: 3,
      name: 'Finante'
    },
    {
      id: 4,
      name: 'Finante'
    }
  ]

  constructor() { }

  public getDomains(): Observable<Domain[]> {
    return of(this.domains);
  }

}
