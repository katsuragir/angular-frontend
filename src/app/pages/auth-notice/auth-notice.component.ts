// Angular
import { ChangeDetectorRef, Component, OnDestroy, OnInit, Output, Input } from '@angular/core';
// RxJS
import { Subscription } from 'rxjs';
// Auth
import { AuthNoticeService } from '../../shared/services/auth-notice.service';
import { AuthNotice } from '../../shared/classes/auth-notice.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auth-notice',
  templateUrl: './auth-notice.component.html',
})
export class AuthNoticeComponent implements OnInit, OnDestroy {
  @Output() type: any;
  @Output() message: any = '';
  @Input() show: boolean;
  resend = false;

  // Private properties
  private subscriptions: Subscription[] = [];
  private subscription: Subscription[] = [];

  /**
	 * Component Constructure
	 *
	 * @param authNoticeService
	 * @param cdr
	 */
  constructor(public authNoticeService: AuthNoticeService,
    private cdr: ChangeDetectorRef, private toastrService: ToastrService) {
  }

  /*
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
    */

  /**
	 * On init
	 */
  ngOnInit() {
    this.subscriptions.push(this.authNoticeService.onNoticeChanged$.subscribe(
      (notice: AuthNotice) => {
        notice = Object.assign({}, {message: '', type: ''}, notice);
        this.message = notice.message;
        if (this.message === 'Login Fail, Please Verification Your Account') {
          this.resend = true;
        } else {
          this.resend = false;
        }
        this.type = notice.type;
        this.cdr.markForCheck();
      }
    ));
  }

  /**
	 * On destroy
	 */
  ngOnDestroy(): void {
    this.subscriptions.forEach(sb => sb.unsubscribe());
    this.subscription.forEach(sb => sb.unsubscribe());
    this.resend = false;
  }
}
