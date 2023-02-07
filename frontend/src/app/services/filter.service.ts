import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private filterSubject: Subject<any> = new Subject<any>();
  public filterObs = this.filterSubject.asObservable();

  constructor() { }

  public changeFilterSubject(filters: any): void {
    this.filterSubject.next(filters);
  }
}
