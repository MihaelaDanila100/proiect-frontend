import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = `${environment.API_BASE_URl}/auth`;

  constructor(private http: HttpClient) { }

  public executeLogIn(formData: any): Observable<any> {
    let body = {
      username: formData.username,
      password: formData.password
    }
    return this.http.post(`${this.url}/login`, body);
  }

  public executeSignUp(formData: any): Observable<any> {
    if(formData.recruiter) formData.accountType = 'recruiters';
    else formData.accountType = 'candidates';
    return this.http.post(`${this.url}/signup`, formData).pipe(
      (result: any) => {
        result.type = formData.accountType;
        return result;
      }
    );
  }
  
}
