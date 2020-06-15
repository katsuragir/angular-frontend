import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, RequiredValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { MustMatch } from './must-match.validator';
import { find } from 'lodash';
import { RegistService } from '../../shared/services/regist.service';
import { Regist } from '../../shared/classes/regist.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { ngf } from 'angular-file';
import { AuthNoticeService } from '../../shared/services/auth-notice.service';
import { Emails } from '../../shared/classes/email.model';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../shared/reducers';
import { AuthService } from '../../shared/services/auth.service';
import { Login } from '../../shared/actions/auth.actions';
import { currentUser } from '../../shared/selectors/auth.selectors';
import { tap } from 'rxjs/operators';
import { GoogleAnalyticsService } from '../../shared/services/google-analytics.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [ DatePipe ]
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  salesForm: FormGroup;
  loading = false;
  submitted = false;
  city: any = [];
  public number: number;
  private date = new Date();
  lastID: any;
  photoID: File;
  PurchRect: File;
  loadingSubject = new BehaviorSubject<boolean>(true);
  public show = new BehaviorSubject<boolean>(false);
  emails: any = [];
  id_regist: string;
  regist: Regist;
  regist$: Observable<Regist>;
  private akses: any;
  login = false;
  sales: any = [];
  imgvar: number;
  found = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private toastrService: ToastrService,
    private registService: RegistService,
    private authNoticeService: AuthNoticeService,
    private store: Store<AppState>,
    private auth: AuthService,
    private analytic: GoogleAnalyticsService
  ) {
    const authTokenKey = 'authce9d77b308c149d5992a80073637e4d5';
    this.akses = localStorage.getItem(authTokenKey);
    if (this.akses) {
      // console.log(this.akses);
      this.login = true;
      // console.log(this.login);
    } else {
      this.login = false;
      // console.log(this.login);
    }
  }

  ngOnInit() {
    this.auth.refreshNeeded$.subscribe(() => {
      this.refreshData();
    });
    this.regist$ = this.store.pipe(select(currentUser));
    this.regist$.subscribe(
      res => {
        this.regist = res;
        // console.log(this.regist);
      }
    );
    this.auth.findAccountById(this.akses).subscribe(
      result => {
        this.getSale(result.idregist);
      }
    );
    this.initRegisterForm();
    // this.generate();
    this.registService.getcity().subscribe(city => { this.city = city.rajaongkir.results; });
    this.registService.getAllemail().subscribe(result => {
      this.emails = result;
      // console.log(this.emails);
    });
    this.registService.getLastIDproduct().subscribe(
      result => {
        this.lastID = result;
        // console.log(this.lastID);
      }
    );
  }

  getSale(id) {
    // console.log('prints');
    this.registService.getDetailsale(id).subscribe(
      result => {
        this.sales = result;
        this.imgvar = result[result.length - 1].imgvar + 1;
        if (this.sales.length > 0) {
          this.found = true;
        } else {
          this.found = false;
        }
        // console.log(this.sales, 1);
      }
    );
  }

  phoneNumber(event: any) {
    const pattern = /[0-9\+]/;

    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  generate() {
    return this.registService.getGenerate().subscribe(
      result => {
        this.number = result.no + 1;
        const year = this.datePipe.transform(this.date, 'yyyy');
        let numb: string;
        numb = this.number.toString();

        this.registerForm.controls['idregist'].setValue( 'G.' + year + '.' + numb.padStart(5, '0'));
        this.id_regist = 'G.' + year + '.' + numb.padStart(5, '0');
        // console.log(this.id_regist, this.registerForm.controls['idregist'].value);
      }
    );
  }

  initRegisterForm() {
    const phoneNumber = '^(\+\d{1,3}[- ]?)?\d{10}$';
    this.registerForm = this.fb.group({
    idregist: [{value: ''  , disabled: true}, Validators.required],
    firstname: ['', [Validators.required, Validators.minLength(3)
      ]
    ],
    lastname: ['',
    ],
    alias: ['', [Validators.required]],
    email: ['', [ Validators.required, Validators.email, Validators.minLength(10) ]
    ],
    phone: ['', [
      Validators.required,
      ]
    ],
    dob: ['', [
      Validators.required
      ]
    ],
    city: ['', [
      Validators.required
      ]
    ],
    robot: ['', [
      Validators.required
      ]
    ],
    PurchaseDate: ['', [
      Validators.required
      ]
    ],
    shopname: ['', [
      Validators.required
      ]
    ],
    location: ['', [
      Validators.required
      ]
    ],
    photo: [null, [
      Validators.required
    ]],
    purch: [null,
      Validators.required],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
      ]
      ],
      confirmPassword: ['', [
        Validators.required
       ]
      ],
    agree: [false, [Validators.required]]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });

    this.salesForm = this.fb.group({
      robot: ['', [
        Validators.required
        ]
      ],
      PurchaseDate: ['', [
        Validators.required
        ]
      ],
      shopname: ['', [
        Validators.required
        ]
      ],
      location: ['', [
        Validators.required
        ]
      ],
      photo: [null, [
        Validators.required
      ]],
      purch: [null,
        Validators.required],
      agree: [false, [Validators.required]]
      });

  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  get s() { return this.salesForm.controls; }

  onOptionDistrict(value) {
    const control = this.registerForm.controls;

    control['city'].setValue(this.city.filter(x => x.city_name + ' ' + x.type === value));

    // console.log(this.city.filter(x => x.city_name + ' ' + x.type === value));
  }

  /**
   * form submit
   */
  onSubmit(withBack: boolean = false) {
    this.submitted = true;
    const controls = this.registerForm.controls;
    // this.generate();
    /*
    this.selectedPattern = 'patternHign';

    if (this.selectedPattern === this.patternHign) {
      this.toastrService.error('Minimum 6 characters, at least one uppercase letter, one lowercase letter and one number');
    }
    */

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;

    if (!controls['agree'].value) {
      // you must agree the terms and conditions
      this.show.next(true);
      this.authNoticeService.setNotice('You must agree the term and condition & privacy policy', 'danger');
      return;
    }

    const custom = find(this.emails, function(item: Emails) {
      return (item.email.toLowerCase() === controls['email'].value.toLowerCase());
    });

    if (custom) {
      this.authNoticeService.setNotice('Email Already Register, Please login first to continued', 'danger');
      this.toastrService.error('Email Already Register, Please login first to continued');
      return;
    }

    if (this.photoID === null || !this.photoID) {
      this.show.next(true);
      this.authNoticeService.setNotice('Photo ID is required', 'danger');
      return;
    }

    if (this.PurchRect === null || !this.PurchRect) {
      this.show.next(true);
      this.authNoticeService.setNotice('Purchase Receipt is required', 'danger');
      return;
    }

    if (this.photoID.size > 1048576) {
      this.show.next(true);
      this.authNoticeService.setNotice('this photo id is too large, The max size is 1 MB', 'danger');
      this.photoID = null;
      this.registerForm.controls['photo'].setValue(null);
      return;
    }


    if (this.PurchRect.size > 1048576) {
      this.show.next(true);
      this.authNoticeService.setNotice('this purchase receipt is too large, The max size is 1 MB', 'danger');
      this.PurchRect = null;
      this.registerForm.controls['purch'].setValue(null);
      return;
    }

    return this.registService.getGenerate().subscribe(
      result => {
        this.number = result.no + 1;
        const year = this.datePipe.transform(this.date, 'yyyy');
        let numb: string;
        numb = this.number.toString();

        this.registerForm.controls['idregist'].setValue( 'G.' + year + '.' + numb.padStart(5, '0'));
        this.id_regist = 'G.' + year + '.' + numb.padStart(5, '0');
        const editedRegist = this.prepareRegist(this.id_regist);
        const dataForm = this.makeFormData(editedRegist);
        this.createRegist(dataForm, withBack);
        // console.log(this.id_regist, this.registerForm.controls['idregist'].value);
      }
    );
  }

  /**
   * form submit
   */
  onSales(withBack: boolean = false) {
    this.submitted = true;
    const controls = this.salesForm.controls;
    // this.generate();
    /*
    this.selectedPattern = 'patternHign';

    if (this.selectedPattern === this.patternHign) {
      this.toastrService.error('Minimum 6 characters, at least one uppercase letter, one lowercase letter and one number');
    }
    */

    // stop here if form is invalid
    if (this.salesForm.invalid) {
      return;
    }

    this.loading = true;

    if (!controls['agree'].value) {
      // you must agree the terms and conditions
      this.show.next(true);
      this.authNoticeService.setNotice('You must agree the term and condition & privacy policy', 'danger');
      return;
    }

    if (this.photoID === null || !this.photoID) {
      this.show.next(true);
      this.authNoticeService.setNotice('Photo ID is required', 'danger');
      return;
    }

    if (this.PurchRect === null || !this.PurchRect) {
      this.show.next(true);
      this.authNoticeService.setNotice('Purchase Receipt is required', 'danger');
      return;
    }

    if (this.photoID.size > 1048576) {
      this.show.next(true);
      this.authNoticeService.setNotice('this photo id is too large, The max size is 1 MB', 'danger');
      this.photoID = null;
      this.registerForm.controls['photo'].setValue(null);
      return;
    }


    if (this.PurchRect.size > 1048576) {
      this.show.next(true);
      this.authNoticeService.setNotice('this purchase receipt is too large, The max size is 1 MB', 'danger');
      this.PurchRect = null;
      this.registerForm.controls['purch'].setValue(null);
      return;
    }

    const editedRegist = this.prepareSales();
    const dataForm = this.makeFormDatasale(editedRegist);
    this.createSales(dataForm, withBack);
  }

  /**
	 * Returns object for saving
	 */
  prepareRegist(regist): Regist {
    const controls = this.registerForm.controls;
    const _regist: Regist = new Regist();
    _regist.clear();
    if (this.lastID === null || !this.lastID) {
      _regist.id = 1;
    } else {
      _regist.id = +this.lastID.id + 1;
    }
    _regist.idregist = regist;
    _regist.firstname = controls['firstname'].value;
    _regist.lastname = controls['lastname'].value;
    _regist.alias = controls['alias'].value;
    _regist.email = controls['email'].value;
    _regist.phone = controls['phone'].value;
    _regist.dob = controls['dob'].value;
    _regist.city = controls['city'].value;
    _regist.robotType = controls['robot'].value;
    _regist.purchDate = controls['PurchaseDate'].value;
    _regist.shopName = controls['shopname'].value;
    _regist.location = controls['location'].value;
    _regist.password = controls['password'].value;
    return _regist;
  }

  /**
	 * Returns object for saving
	 */
  prepareSales(): Regist {
    const controls = this.salesForm.controls;
    const _regist: Regist = new Regist();
    _regist.clear();
    _regist.id = this.regist.id;
    _regist.idregist = this.regist.idregist;
    _regist.firstname = this.regist.firstname;
    _regist.lastname = this.regist.lastname;
    _regist.alias = this.regist.alias;
    _regist.email = this.regist.email;
    _regist.phone = this.regist.phone;
    _regist.dob = this.regist.dob;
    _regist.city = this.regist.city;
    _regist.robotType = controls['robot'].value;
    _regist.purchDate = controls['PurchaseDate'].value;
    _regist.shopName = controls['shopname'].value;
    _regist.location = controls['location'].value;
    return _regist;
  }

  makeFormData(_regist) {
    // console.log(_regist, this.photoID, this.PurchRect);
    const formData: FormData = new FormData();
    formData.append('id', _regist.id);
    formData.append('rg', _regist.idregist);
    formData.append('fn', _regist.firstname);
    formData.append('ln', _regist.lastname);
    formData.append('as', _regist.alias);
    formData.append('ac', _regist.accessCode);
    formData.append('em', _regist.email);
    formData.append('pn', _regist.phone);
    formData.append('dob', _regist.dob);
    formData.append('ct', _regist.city);
    formData.append('rt', _regist.robotType);
    formData.append('pd', _regist.purchDate);
    formData.append('sn', _regist.shopName);
    formData.append('lc', _regist.location);
    formData.append('pw', _regist.password);
    if (this.photoID[0].type === 'image/jpeg') {
      formData.append('photoID', this.photoID[0], this.registerForm.controls['idregist'].value + '-' + _regist.alias + '-photoid.jpg');
    } else if (this.photoID[0].type === 'image/png') {
      formData.append('photoID', this.photoID[0], this.registerForm.controls['idregist'].value + '-' + _regist.alias + '-photoid.png');
    } else {
      this.show.next(true);
      this.authNoticeService.setNotice('The file must be PNG / JPG', 'danger');
      this.toastrService.error('The file must be PNG / JPG');
      this.photoID = null;
      this.registerForm.controls['photo'].setValue(null);
      return;
    }

    if (this.PurchRect[0].type === 'image/jpeg') {
      // tslint:disable-next-line: max-line-length
      formData.append('PurchRect', this.PurchRect[0], this.registerForm.controls['idregist'].value + '-' + _regist.alias + '-purchaseReceipt.jpg');
    } else if (this.PurchRect[0].type === 'image/png') {
      // tslint:disable-next-line: max-line-length
      formData.append('PurchRect', this.PurchRect[0], this.registerForm.controls['idregist'].value + '-' + _regist.alias + '-purchaseReceipt.png');
    } else {
      this.show.next(true);
      this.authNoticeService.setNotice('The file must be PNG / JPG ', 'danger');
      this.toastrService.error('The file must be PNG / JPG ');
      this.PurchRect = null;
      this.registerForm.controls['purch'].setValue(null);
      return;
    }
    return formData;
  }

  makeFormDatasale(_regist) {
    // console.log(_regist, this.photoID, this.PurchRect);
    const formData: FormData = new FormData();
    formData.append('id', _regist.id);
    formData.append('rg', _regist.idregist);
    formData.append('fn', _regist.firstname);
    formData.append('ln', _regist.lastname);
    formData.append('as', _regist.alias);
    formData.append('ac', _regist.accessCode);
    formData.append('em', _regist.email);
    formData.append('pn', _regist.phone);
    formData.append('dob', _regist.dob);
    formData.append('ct', _regist.city);
    formData.append('rt', _regist.robotType);
    formData.append('pd', _regist.purchDate);
    formData.append('sn', _regist.shopName);
    formData.append('lc', _regist.location);
    formData.append('pw', _regist.password);
    /*
    if (this.photoID[0].type === 'image/jpeg') {
      // tslint:disable-next-line: max-line-length
      formData.append('photoID', this.photoID[0], _regist.idregist + '-' + _regist.alias + `(${this.imgvar})` + '-photoid.jpg');
    } else if (this.photoID[0].type === 'image/png') {
      // tslint:disable-next-line: max-line-length
      formData.append('photoID', this.photoID[0], _regist.idregist + '-' + _regist.alias + `(${this.imgvar})` + '-photoid.png');
    } else {
      this.show.next(true);
      this.authNoticeService.setNotice('The file must be PNG / JPG ', 'danger');
      this.toastrService.error('The file must be PNG / JPG ');
      this.photoID = null;
      this.registerForm.controls['photo'].setValue(null);
      return;
    } */

    if (this.PurchRect[0].type === 'image/jpeg') {
      // tslint:disable-next-line: max-line-length
      formData.append('PurchRect', this.PurchRect[0], _regist.idregist + '-' + _regist.alias + `(${this.imgvar})` + '-purchaseReceipt.jpg');
    } else if (this.PurchRect[0].type === 'image/png') {
      // tslint:disable-next-line: max-line-length
      formData.append('PurchRect', this.PurchRect[0], _regist.idregist + '-' + _regist.alias + `(${this.imgvar})` + '-purchaseReceipt.png');
    } else {
      this.show.next(true);
      this.authNoticeService.setNotice('The file must be PNG / JPG ', 'danger');
      this.toastrService.error('The file must be PNG / JPG ');
      this.PurchRect = null;
      this.registerForm.controls['purch'].setValue(null);
      return;
    }
    formData.append('var', this.imgvar.toString());
    return formData;
  }

  photo(fileInput: any) {
    const photo = <File>fileInput.target.files[0];
    // console.log(photo);
    // this.preview();
    if (photo.size > 1048576) {
      this.show.next(true);
      this.authNoticeService.setNotice('this photo id is too large, The max size is 1 MB', 'danger');
      this.toastrService.error('this photo id is too large, The max size is 1 MB');
      this.photoID = null;
      this.registerForm.controls['photo'].setValue(null);
      return;
    } else {
      return this.show.next(false);
    }
    /*
    if (photo.type !== 'image/jpeg') {
      this.toastrService.error('this.');
      this.photoID = null;
      this.registerForm.controls['photo'].setValue(null);
      return;
    }
    */
  }

  purch(fileInput: any) {
    const purch = <File>fileInput.target.files[0];
    // console.log(purch);
    // this.preview();
    if (purch.size > 1048576) {
      this.show.next(true);
      this.authNoticeService.setNotice('this purchase receipt is too large, The max size is 1 MB', 'danger');
      this.toastrService.error('this photo id is too large, The max size is 1 MB');
      this.PurchRect = null;
      this.registerForm.controls['purch'].setValue(null);
      return;
    } else {
      return this.show.next(false);
    }
  }

  /**
	 * Regist
	 *
	 * @param _Regist: RegistModel
	 * @param withBack: boolean
	 */
  createRegist(formData, withBack: boolean = false) {
    this.loadingSubject.next(true);
    this.registService.createRegist(formData).subscribe(
      res => {
        if (res.message === 'Success') {
          this.show.next(true);
          this.toTop();
          this.authNoticeService.setNotice('Registeration Success', 'success');
          this.reset();
          const data = {
            eventname: 'Register Member',
            // pages: event.urlAfterRedirects,
            ip: JSON.parse(localStorage.getItem('sessionid'))
         };
          this.analytic.customerRegister(data).subscribe(
            result => {
              // console.log(result.text);
            }
          );
        } else if (res.message === 'The File is null') {
          this.show.next(true);
          // tslint:disable-next-line: max-line-length
          this.authNoticeService.setNotice('Invalid Photo ID and Purchase Receipt, Please check if that file size below 1 Mb and format is JPG | PNG ', 'danger');
          this.toTop();
        } else if (res.message === 'The photo is null') {
          this.show.next(true);
          // tslint:disable-next-line: max-line-length
          this.authNoticeService.setNotice('Invalid Photo ID, Please check if that file size below 1 Mb and format is JPG | PNG ', 'danger');
          this.toTop();
        } else if (res.message === 'The purch is null') {
          this.show.next(true);
          // tslint:disable-next-line: max-line-length
          this.authNoticeService.setNotice('Invalid Purchase Receipt, Please check if that file size below 1 Mb and format is JPG | PNG ', 'danger');
          this.toTop();
        } else {
          this.show.next(true);
          this.authNoticeService.setNotice('Register Fail');
          this.toTop();
        }
      }
    );
  }

  /**
	 * Sales
	 *
	 * @param _Regist: RegistModel
	 * @param withBack: boolean
	 */
  createSales(formData, withBack: boolean = false) {
    this.loadingSubject.next(true);
    this.registService.createSales(formData).subscribe(
      res => {
        if (res.message === 'Success') {
          this.show.next(true);
          this.toTop();
          this.authNoticeService.setNotice('Registeration Success', 'success');
          this.reset();
          const data = {
            eventname: 'Register Member',
            // pages: event.urlAfterRedirects,
            ip: JSON.parse(localStorage.getItem('sessionid'))
         };
          this.analytic.customerRegister(data).subscribe(
            result => {
              // console.log(result.text);
            }
          );
        } else if (res.message === 'The File is null') {
          this.show.next(true);
          // tslint:disable-next-line: max-line-length
          this.authNoticeService.setNotice('Invalid Photo ID and Purchase Receipt, Please check if that file size below 1 Mb and format is JPG | PNG ', 'danger');
          this.toTop();
        } else if (res.message === 'The photo is null') {
          this.show.next(true);
          // tslint:disable-next-line: max-line-length
          this.authNoticeService.setNotice('Invalid Photo ID, Please check if that file size below 1 Mb and format is JPG | PNG ', 'danger');
          this.toTop();
        } else if (res.message === 'The purch is null') {
          this.show.next(true);
          // tslint:disable-next-line: max-line-length
          this.authNoticeService.setNotice('Invalid Purchase Receipt, Please check if that file size below 1 Mb and format is JPG | PNG ', 'danger');
          this.toTop();
        } else {
          this.show.next(true);
          this.authNoticeService.setNotice('Register Fail');
          this.toTop();
        }
      }
    );
  }

  /**
	 * Reset
	 */
  reset() {
    setTimeout(() => {
      location.reload();
    }, 1000);
    this.authNoticeService.setNotice('Register Success', 'success');
    const email = this.registerForm.controls['email'].value;
    const password = this.registerForm.controls['password'].value;

    this.auth.login(email, password)
    .pipe(
      tap(customer => {
        if (customer) {
          this.store.dispatch(new Login({authToken: customer.accessCode}));
          // this.router.navigateByUrl(this.returnUrl); // home
          // location.reload();
        } // else {
          // this.authNoticeService.setNotice(this.translate.instant('Login Fail'), 'danger');
        // }
      })
    )
    .subscribe();
  }

  /**
	 * Checking control validation
	 *
	 * @param controlName: string => Equals to formControlName
	 * @param validationType: string => Equals to valitors name
	 */
  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.registerForm.controls[controlName];
      if (!control) {
        return false;
      }

      const result = control.hasError(validationType) && (control.dirty || control.touched);
      // console.log(result);
      return result;
  }

  refreshData() {
    this.store.dispatch(new Login({authToken: this.regist.accessCode}));
  }

  toTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
