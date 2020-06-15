import { Component, Inject, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { LandingFixService } from '../../services/landing-fix.service';
import { DOCUMENT } from "@angular/common";
import { WINDOW } from '../../services/windows.service';
import { CartItem } from '../../classes/cart-item';
import { CartService } from '../../services/cart.service';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { Logout } from '../../actions/auth.actions';
import { AuthService } from '../../services/auth.service';
import { DomainURL } from '../../domainURL';
declare var $: any;

@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderOneComponent implements OnInit {
  
  public shoppingCartItems  :   CartItem[] = [];
  scroll: number = 0;
  public url: any;
  private akses: any;
  login = false;
  imgUrl: string;

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private store: Store<AppState>,
    @Inject(WINDOW) private window, private fix: LandingFixService, private cartService: CartService, private auth: AuthService,
    private activatedRoute: ActivatedRoute, private domainUrl: DomainURL) {
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
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.url = event.url;
          this.scroll = 0;
          if (event.url === '/') {
            this.url = event.url;
            this.document.getElementById("sticky").classList.add('stick');
            this.document.getElementById("menu").classList.add('color-menu');
          } else {
            this.url = event.url;
            this.document.getElementById("sticky").classList.remove('stick');
            this.document.getElementById("menu").classList.remove('color-menu');
          }
          // console.log(this.url);
        }
      });
    this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
  }

  ngOnInit() {
    this.imgUrl = this.domainUrl.domain;
    $.getScript('assets/js/menu.js');
  }

  openNav() {
  	this.fix.addNavFix();
  }

  closeNav() {
     this.fix.removeNavFix();
  }

  public register() {
    this.router.navigate(['/pages/register'], {relativeTo: this.activatedRoute});
  }

  public loginm() {
    this.router.navigate(['/pages/login'], {relativeTo: this.activatedRoute});
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

  // @HostListener Decorator
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    this.scroll = number;
    // console.log(this.scroll);
      if (this.url === '/') {
        if (number >= 50) {
          this.document.getElementById("sticky").classList.add('stick');
          this.document.getElementById("sticky").classList.add('fixes');
          this.document.getElementById("menu").classList.remove('color-menu');
        } else {
          this.document.getElementById("sticky").classList.add('stick');
          this.document.getElementById("menu").classList.add('color-menu');
          this.document.getElementById("sticky").classList.remove('fixes');
        }
      } else {
        if (number >= 50) {
          // this.document.getElementById("sticky").classList.add('stick');
          this.document.getElementById("sticky").classList.add('fixes');
          // this.document.getElementById("menu").classList.remove('color-menu');
        } else {
          // this.document.getElementById("sticky").classList.add('stick');
          // this.document.getElementById("menu").classList.add('color-menu');
          this.document.getElementById("sticky").classList.remove('fixes');
        }
      }
  }

}
