import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthNoticeService } from '../../shared/services/auth-notice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { tap } from 'rxjs/operators';
import { Login } from '../../shared/actions/auth.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/reducers';
import { GoogleAnalyticsService } from '../../shared/services/google-analytics.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loading = false;
  loginForm: FormGroup;
  private akses: any;
  private returnUrl: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authNoticeService: AuthNoticeService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private auth: AuthService,
    private store: Store<AppState>,
    private analytic: GoogleAnalyticsService
  ) {
    const authTokenKey = 'authce9d77b308c149d5992a80073637e4d5';
    this.akses = localStorage.getItem(authTokenKey);
    if (this.akses) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.initLoginForm();
    // redirect back to the returnUrl before login
    this.route.queryParams.subscribe(params => {
      this.returnUrl = params['returnUrl'] || '/';
    });
  }

  /**
   * Form initalization
   * default params, validators
   */
  initLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.email,
        Validators.minLength(10),
        Validators.maxLength(320)
      ])
    ],
    password: ['', Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100)
      ])
    ]
    });
  }

  /**
   * submit login
   */
  submit() {
    const controls = this.loginForm.controls;

    // check form
    if (this.loginForm.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      return;
    }

    this.loading = true;

    const authData = {
      email: controls['email'].value,
      password: controls['password'].value
    };

    this.loading = true;

    this.auth.login(authData.email, authData.password)
    .pipe(
      tap(customer => {
        if (customer) {
          this.store.dispatch(new Login({authToken: customer.accessCode}));
          this.analyticData();
        } // else {
          // this.authNoticeService.setNotice(this.translate.instant('Login Fail'), 'danger');
        // }
      })
    )
    .subscribe();
  }

  analyticData() {
    const data = {
      eventname: 'Login Member',
      // pages: event.urlAfterRedirects,
      ip: JSON.parse(localStorage.getItem('sessionid'))
   };
   // console.log(data);
    this.auth.customerLogin(data).subscribe(
      result => {
        this.router.navigateByUrl(this.returnUrl); // home
        location.reload();
      }
    );
    
  }

  /**
	 * On destroy
	 */
  ngOnDestroy(): void {
    this.authNoticeService.setNotice(null);
    this.loading = false;
  }

  public register() {
    this.router.navigate(['/pages/register'], {relativeTo: this.activatedRoute});
  }

}
