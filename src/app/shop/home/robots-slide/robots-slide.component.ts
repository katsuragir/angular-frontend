import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../shared/classes/product';
import { CartItem } from '../../../shared/classes/cart-item';
import { ProductsService } from '../../../shared/services/products.service';
import { WishlistService } from '../../../shared/services/wishlist.service';
import { CartService } from '../../../shared/services/cart.service';
import { Observable, of } from 'rxjs';
import { Robots } from '../../../shared/classes/robots';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-robots-slide',
  templateUrl: './robots-slide.component.html',
  styleUrls: ['./robots-slide.component.scss']
})

export class RobotsSlideComponent implements OnInit {
  
  @Input() product : any;

  public variantImage  :  any = ''; 
  public selectedItem  :  any = '';

  constructor(private router: Router, public productsService: ProductsService,
    private wishlistService: WishlistService, private cartService: CartService, protected $gaService: GoogleAnalyticsService) {
  }

  ngOnInit() {  }

  // Add to cart
  public addToCart(product: Product,  quantity: number = 1) {
    this.cartService.addToCart(product,quantity);
  }

  // Add to compare
  public addToCompare(product: Product) {
     this.productsService.addToCompare(product);
  }

  // Add to wishlist
  public addToWishlist(product: Product) {
     this.wishlistService.addToWishlist(product);
  }
 
 // Change variant images
  public changeVariantImage(image) {
     this.variantImage = image;
     this.selectedItem = image;
  }

  SendAddToCartEvent(product) {
    this.$gaService.event('View', 'click', product.name);
  }

}
