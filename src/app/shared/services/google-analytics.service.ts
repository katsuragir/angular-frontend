import { Injectable } from '@angular/core';
import { DomainURL } from '../domainURL';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

declare let gtag: Function;

const API_ANALYRICS = '/rest/api/analytic';

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor(private localUrl: DomainURL, private http: HttpClient) { }

  getDomain(): string {
    return this.localUrl.domain + API_ANALYRICS;
  }

  public eventEmitter(
    eventName: string,
    eventCategory: string,
    eventAction: string,
    eventLabel: string = null,
    eventValue: number = null
  ) {
    gtag('event', eventName, {
      eventCategory: eventCategory,
      eventLabel: eventLabel,
      eventAction: eventAction,
      eventValue: eventValue
    });
  }

  getIpAddress(): Observable<any> {
    return this.http.get<any>('https://api.ipify.org/?format=json').pipe(
      catchError(this.handleError)
    );
  }

  customerVisit(data): Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    return this.http.post<any>(this.getDomain(), data, { headers: httpHeaders });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  customerRegister(data): Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    return this.http.post<any>(this.getDomain() + '/register', data, { headers: httpHeaders });
  }

  customerGeio(data): Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    return this.http.post<any>(this.getDomain() + '/geio', data, { headers: httpHeaders });
  }

  customerGanker(data): Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    return this.http.post<any>(this.getDomain() + '/ganker', data, { headers: httpHeaders });
  }

}
