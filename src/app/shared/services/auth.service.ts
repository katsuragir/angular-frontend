import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { find } from 'lodash';
import { Regist } from '../classes/regist.model';
import { Md5 } from 'ts-md5';
import { environment } from '../../../environments/environment';
import { AuthNoticeService } from './auth-notice.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { DomainURL } from '../domainURL';


const API_CUSTOMER = '/rest/api/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private currentCustomerSubject: BehaviorSubject<Customer>;
  // public customerLogin: Observable<Customer>;
  private _refreshNeeded$ = new Subject<void>();
  get refreshNeeded$() {
    return this._refreshNeeded$;
  }
  public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient,
    private authNoticeService: AuthNoticeService,
    private translate: TranslateService,
    private router: Router,
    private localUrl: DomainURL) {
    /*
    this.currentCustomerSubject = new BehaviorSubject<Customer>(JSON.parse(localStorage.getItem('customerLogin')));
    this.customerLogin = this.currentCustomerSubject.asObservable();
    */
  }

  getDomain(): string {
    return this.localUrl.domain + API_CUSTOMER;
  }

  /*
  public get currentCustomerValue(): Customer {
    return this.currentCustomerSubject.value;
  }
  */
  /**
   * Fetch all customer
   */
  customer(): Observable<Regist[]> {
    return this.http.get<Regist[]>(this.getDomain());
  }

  /**
   * Fetch Regist customer
   */
  customerInfo(): Observable<Regist[]> {
    return this.http.get<Regist[]>(this.getDomain() + '/info/all');
  }

  /**
   * Find Account customer
   */
  findAccount(token: string): Observable<Regist[]> {
    const url = this.localUrl.domain + '/api/customer/register/find/account/';
    return this.http.get<Regist[]>(url + token);
  }

  /**
   * Find Account customer
   */
  GetPassword(token: string): Observable<any> {
    const url = this.localUrl.domain + '/api/customer/register/find/account/';
    return this.http.get<any>(url + token);
  }

  /**
   * Verify customer account
   */
  verifiAccount(accessToken: string) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    const url = this.localUrl.domain + '/api/customer/register/verify/';
    return this.http.put(url + accessToken, { headers: httpHeaders });
  }

  /**
   * active account
   */
  activeAccount(id: number) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    // const id = formdata.id;
    const url = this.localUrl.domain + '/api/customer/register/active/';
    return this.http.put(url + id, { headers: httpHeaders });
  }

  /**
   * Register form
   */
  register(customer: Regist): Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    return this.http.post<Regist>(this.getDomain(), customer, { headers: httpHeaders });
  }

  /**
   * Biodata Form
   */
  biodata(formdata) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    return this.http.post(this.getDomain() + '/info', formdata, { headers: httpHeaders });
  }

  /**
   * login
   */
  loginReg(email: string, password: string): Observable<Regist> {
    if (!email || !password) {
        return of(null);
    }

    return  this.customer().pipe(
        map((result: Regist[]) => {
            if (result.length <= 0) {
                return null;
            }
            const customer = find(result, function(item: Regist) {
                return (item.email.toLowerCase() === email.toLowerCase() && item.password === password);
            });

            if (!customer) {
              this.authNoticeService.setNotice(this.translate.instant('Login Fail, Email and Password didn`t match'), 'danger');
              return null;
            }

            customer.password = undefined;
            return customer;
        })
    );
  }

  // Authentication/Authorization
  login(email: string, password: string): Observable<Regist> {
    if (!email || !password) {
        return of(null);
    }

    return  this.customer().pipe(
        map((result: Regist[]) => {
            if (result.length <= 0) {
              this.authNoticeService.setNotice(this.translate.instant('Login Fail, This email is not registered'), 'danger');
                return null;
            }
            const _password = Md5.hashStr(password);
            const customer = find(result, function(item: Regist) {
                return (item.email.toLowerCase() === email.toLowerCase() && item.password === _password);
            });

            if (!customer) {
              this.authNoticeService.setNotice(this.translate.instant('Login Fail, Email and Password didn`t match'), 'danger');
              return null;
            }

            customer.password = undefined;
            
            return customer;
        })
    );
  }

  resend(customer) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    return this.http.post(this.getDomain() + '/resend/verification', customer, { headers: httpHeaders });
  }

  /**
   * Dapatkan User berdasarkan acces token
   */
  getUserByToken(): Observable<Regist> {
    const authTokenKey = 'authce9d77b308c149d5992a80073637e4d5';
    const userToken = localStorage.getItem(authTokenKey);
    if (!userToken) {
        return of(null);
    }

    return this.customer().pipe(
        map((result: Regist[]) => {
            if (result.length <= 0) {
                return null;
            }

            const customer = find(result, function(item: Regist) {
                return (item.accessCode === userToken.toString());
            });

            if (!customer) {
                return null;
            }

            customer.password = undefined;
            return customer;
        })
    );
  }

  /**
   * Forget Password
   */
  sendMail(dataAkun) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    const id = dataAkun.id;
    return this.http.post(this.getDomain() + `/forget/send/${id}`, dataAkun, { headers: httpHeaders });
  }

  /**
   * Account edit address
   */
  accountEditaddress(user): Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    const id = user.id;
    return this.http.put(this.getDomain() + `/account/address/${id}`, user, { headers: httpHeaders }).pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
  }

  /**
   * Account edit info
   */
  accountEditinfo(user): Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    const id = user.id;
    return this.http.put(this.getDomain() + `/account/info/${id}`, user, { headers: httpHeaders }).pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
  }

  /**
   * Account contact edit
   */
  accountContactedit(user): Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    const id = user.id;
    return this.http.put(this.getDomain() + `/account/contact/${id}`, user, { headers: httpHeaders }).pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
  }

  /**
   * Account change password
   */
  accountChangepassword(data): Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    const id = data.id;
    return this.http.put(this.getDomain() + `/account/password/${id}`, data, { headers: httpHeaders });
  }

  /**
   * find customer
   */
  findAccountById(id): Observable<Regist> {
    return this.http.get<Regist>(this.getDomain() + `/account/${id}`);
  }

  /**
   * Add address account
   */
  addAccountaddress(data): Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    const id = data.id;
    return this.http.post(this.getDomain() + `/account/address/${id}`, data, { headers: httpHeaders });
  }

  /**
   * Massage Contact Us
   */
  sendMassageEmail(data): Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    return this.http.post(this.getDomain() + `/send/massage/contact`, data, { headers: httpHeaders });
  }

  /**
   * Analytic insert
   */
  customerLogin(data): Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    return this.http.post<any>(this.localUrl.domain + '/rest/api/analytic/login', data, { headers: httpHeaders });
  }

}
