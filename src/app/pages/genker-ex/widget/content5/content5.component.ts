import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ProductsService } from '../../../../shared/services/products.service';
import { CartService } from '../../../../shared/services/cart.service';
import { WishlistService } from '../../../../shared/services/wishlist.service';
import { DomainURL } from '../../../../shared/domainURL';
declare var $: any;

@Component({
  selector: 'app-content5',
  templateUrl: './content5.component.html',
  styleUrls: ['./content5.component.scss'],
  providers: [ProductsService, CartService, WishlistService]
})
export class Content5Component implements OnInit {

  public url : any;
  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
  imgUrl: string;

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

  public logoSlideConfig: any = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1367,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  // Logo
  public logo = [{
    image: `${this.domainUrl.domain}/images/front/tuzhuang(8).jpg`,
  }, {
    image: `${this.domainUrl.domain}/images/front/tuzhuang(1).jpg`,
  }, {
    image: `${this.domainUrl.domain}/images/front/tuzhuang(2).jpg`,
  }, {
    image: `${this.domainUrl.domain}/images/front/tuzhuang(3).jpg`,
  }, {
    image: `${this.domainUrl.domain}/images/front/tuzhuang(4).jpg`,
  }, {
    image: `${this.domainUrl.domain}/images/front/tuzhuang(5).jpg`,
  }, {
    image: `${this.domainUrl.domain}/images/front/tuzhuang(6).jpg`,
  }, {
    image: `${this.domainUrl.domain}/images/front/tuzhuang(7).jpg`,        
}]

}
