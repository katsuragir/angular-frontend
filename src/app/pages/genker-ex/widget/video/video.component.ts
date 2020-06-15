import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ProductsService } from '../../../../shared/services/products.service';
import { CartService } from '../../../../shared/services/cart.service';
import { WishlistService } from '../../../../shared/services/wishlist.service';
import { DomainURL } from '../../../../shared/domainURL';
declare var $: any;

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  providers: [ProductsService, CartService, WishlistService]
})
export class VideoGankerEXComponent implements OnInit {

  imgUrl: string;
  public url : any; 

  constructor(private router: Router, private domainUrl: DomainURL) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
        // console.log(this.url);
      }
    });
   }

  ngOnInit() {
    this.imgUrl = this.domainUrl.domain;
    $.getScript('assets/js/script.js');
  }

}
