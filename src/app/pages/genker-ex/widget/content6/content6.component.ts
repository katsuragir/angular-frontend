import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ProductsService } from '../../../../shared/services/products.service';
import { CartService } from '../../../../shared/services/cart.service';
import { WishlistService } from '../../../../shared/services/wishlist.service';
import { DOCUMENT } from '@angular/common';
import { DomainURL } from '../../../../shared/domainURL';
declare var $: any;

@Component({
  selector: 'app-content6',
  templateUrl: './content6.component.html',
  styleUrls: ['./content6.component.scss'],
  providers: [ProductsService, CartService, WishlistService]
})
export class Content6Component implements OnInit {

  public url : any;
  @ViewChild('videoPlayer', { static: false }) videoplayer: ElementRef;
  imgUrl: string;

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document, private domainUrl: DomainURL) {
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
    this.hover1();
  }

  hover1() {
    // tslint:disable-next-line: no-unused-expression
    this.document.getElementById('n1').style.removeProperty('display');
    this.document.getElementById('a1').classList.add('match-sign-active');
    this.document.getElementById('n2').style.display = 'none';
    this.document.getElementById('a2').classList.remove('match-sign-active');
    this.document.getElementById('n3').style.display = 'none';
    this.document.getElementById('a3').classList.remove('match-sign-active');
  }

  hover2() {
    // tslint:disable-next-line: no-unused-expression
    this.document.getElementById('n2').style.removeProperty('display');
    this.document.getElementById('a2').classList.add('match-sign-active');
    this.document.getElementById('n1').style.display = 'none';
    this.document.getElementById('a1').classList.remove('match-sign-active');
    this.document.getElementById('n3').style.display = 'none';
    this.document.getElementById('a3').classList.remove('match-sign-active');
  }

  hover3() {
    // tslint:disable-next-line: no-unused-expression
    this.document.getElementById('n3').style.removeProperty('display');
    this.document.getElementById('a3').classList.add('match-sign-active');
    this.document.getElementById('n2').style.display = 'none';
    this.document.getElementById('a2').classList.remove('match-sign-active');
    this.document.getElementById('n1').style.display = 'none';
    this.document.getElementById('a1').classList.remove('match-sign-active');
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
