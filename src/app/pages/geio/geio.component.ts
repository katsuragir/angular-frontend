import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ProductsService } from '../../shared/services/products.service';
import { CartService } from '../../shared/services/cart.service';
import { WishlistService } from '../../shared/services/wishlist.service';
declare var $: any;

@Component({
  selector: 'app-geio',
  templateUrl: './geio.component.html',
  styleUrls: ['./geio.component.scss'],
  providers: [ProductsService, CartService, WishlistService]
})
export class GeioComponent implements OnInit {

  public url : any; 

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
        // console.log(this.url);
      }
    });
   }

  ngOnInit() {
    $.getScript('assets/js/script.js');
  }

}
