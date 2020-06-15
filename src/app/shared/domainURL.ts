// Angular
import { Injectable } from '@angular/core';
// import { HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DomainURL {

  // tslint:disable-next-line: no-inferrable-types
  public domain: string = 'http://localhost/api';
  public ongkir: string = 'http://localhost/ongkir';

}
