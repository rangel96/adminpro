import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TokenStoreService } from './security/token-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  private token = '';
  constructor(private router: Router, private tokenStore: TokenStoreService) {
    this.tokenStore.select$().subscribe(token => this.token = token);
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(this.handleError.bind(this)));
  }
  private handleError(err) {
    const unauthorized_code = 401;
    if (err instanceof HttpErrorResponse) {
      if (err.status === unauthorized_code) {
        this.router.navigate(['/register']);
      }
    }
    return throwError(err);
  }


}
