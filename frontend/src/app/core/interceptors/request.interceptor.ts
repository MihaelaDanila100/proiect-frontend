import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { RouterService } from 'src/app/services/router.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(private routerService: RouterService) {}

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers:any = {
        'Content-Type': 'application/json'
    };
    if(localStorage.getItem('account-type')) headers['Account-Type'] = localStorage.getItem('account-type');
    const clone = httpRequest.clone({
        setHeaders: headers
    });
    return next.handle(clone).pipe(
        catchError((err) => {
            if(err instanceof HttpErrorResponse) {
                if(err.status === 401) {
                    this.routerService.goBackHome();
                }
            }
            return throwError(err);
        })
    );
  }
}