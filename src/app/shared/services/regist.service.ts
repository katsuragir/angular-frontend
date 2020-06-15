import { Injectable } from '@angular/core';
import { Product } from '../classes/product';
import { CartItem } from '../classes/cart-item';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomainURL } from '../domainURL';

const API_REGIST_URL = '/rest/api/register';

@Injectable({
  providedIn: 'root'
})

export class RegistService {

  constructor(private toastrService: ToastrService, private http: HttpClient, private localUrl: DomainURL) {
  }

  getDomain(): string {
    return this.localUrl.domain + API_REGIST_URL;
  }

  /**
   * Fetch all customer
   */
  public getcity(): Observable<any> {
    return this.http.get<any>(this.localUrl.ongkir + '/city');
  }

  // detail
  getDetailsale(id): Observable<any[]> {
    // console.log(id);
    return this.http.get<any[]>(this.getDomain() + `/detailsale/${id}`);
  }

  // Generate
  getGenerate(): Observable<any> {
    return this.http.get<any>(this.getDomain() + '/generateNo');
  }

  getLastIDproduct(): Observable<any> {
    return this.http.get<any>(this.getDomain() + '/getLastId/regist');
  }

  // create regist
  createRegist(data): Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    return this.http.post(this.getDomain() + '/', data, { headers: httpHeaders });
  }

  // create sales
  createSales(data): Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    return this.http.post(this.getDomain() + '/sales', data, { headers: httpHeaders });
  }

  getAllemail(): Observable<any[]> {
    return this.http.get<any[]>(this.getDomain() + '/allemail');
  }

}
