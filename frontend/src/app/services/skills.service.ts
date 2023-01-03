import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private url: string = `${environment.API_BASE_URl}/skills/`;

  constructor(private http: HttpClient) { }

  public getAllSkills(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
}
