import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ProductsService } from '../../../../shared/services/products.service';
import { CartService } from '../../../../shared/services/cart.service';
import { WishlistService } from '../../../../shared/services/wishlist.service';
import { DomainURL } from '../../../../shared/domainURL';
declare var $: any;

@Component({
  selector: 'app-content3',
  templateUrl: './content3.component.html',
  styleUrls: ['./content3.component.scss'],
  providers: [ProductsService, CartService, WishlistService]
})
export class Content3Component implements OnInit {

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

  playPause() {
    const myVideo: any = document.getElementById('vjs_video_3016_html5_api');
    myVideo.play();
  }

  playPause1() {
    const myVideo: any = document.getElementById('vjs_video_3382_html5_api');
    myVideo.play();
  }

}
