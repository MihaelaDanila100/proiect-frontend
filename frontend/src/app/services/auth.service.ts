import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public executeLogIn(formData: any): Observable<any> {
    let body = {
      username: formData.username,
      password: formData.password
    }
    return of("done", body);
  }
  
}
