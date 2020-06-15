import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CartItem } from '../../../../shared/classes/cart-item';
import { CartService } from '../../../../shared/services/cart.service';
import { ProductsService } from '../../../../shared/services/products.service';
import { Observable, of } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../shared/reducers';
import { Logout } from '../../../../shared/actions/auth.actions';
import { AuthService } from '../../../../shared/services/auth.service';

declare var $: any;

@Component({
  selector: 'app-header-widgets',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  @Input() shoppingCartItems:   CartItem[] = [];

  public show: boolean = false;
  private akses: any;
  login = false;

  constructor(private translate: TranslateService, private cartService: CartService, private location: Location,
   public productsService: ProductsService, private router: Router, private activatedRoute: ActivatedRoute,
   private store: Store<AppState>, private auth: AuthService) {
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

  ngOnInit() { }

  public updateCurrency(curr) {
    this.productsService.currency = curr;
  }

  public changeLanguage(lang) {
    this.translate.use(lang);
  }

  public openSearch() {
    this.show = true;
  }

  public register() {
    this.router.navigate(['/pages/register'], {relativeTo: this.activatedRoute});
  }

  public closeSearch() {
    this.show = false;
  }

  public back() {
    this.location.back();
  }

  public home() {
    this.router.navigate(['/'], {relativeTo: this.activatedRoute});
  }

  public getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }

  public removeItem(item: CartItem) {
    this.cartService.removeFromCart(item);
  }

  /**
	 * Log out
	 */
  logout() {
    const authTokenKey = 'authce9d77b308c149d5992a80073637e4d5';
    localStorage.removeItem(authTokenKey);
    this.auth.isLoggedIn.next(false);
    location.reload();
  }

}
