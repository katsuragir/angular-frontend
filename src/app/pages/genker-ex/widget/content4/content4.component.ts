import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ProductsService } from '../../../../shared/services/products.service';
import { CartService } from '../../../../shared/services/cart.service';
import { WishlistService } from '../../../../shared/services/wishlist.service';
import { DomainURL } from '../../../../shared/domainURL';
declare var $: any;

@Component({
  selector: 'app-content4',
  templateUrl: './content4.component.html',
  styleUrls: ['./content4.component.scss'],
  providers: [ProductsService, CartService, WishlistService]
})
export class Content4Component implements OnInit {

  public url : any;
  @ViewChild('videoPlayer', { static: false }) videoplayer: ElementRef;
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

  public sliderConfig: any = {
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    infinite: true,
    fade: false,
    draggable: true
    /*
    enabled: scope.enabled !== 'false',
    accessibility: scope.accessibility !== 'false',
    adaptiveHeight: scope.adaptiveHeight === 'true',
    autoplay: scope.autoplay === 'true',
    autoplaySpeed: scope.autoplaySpeed != null ? parseInt(scope.autoplaySpeed, 10) : 3000,
    arrows: scope.arrows !== 'false',
    asNavFor: scope.asNavFor ? scope.asNavFor : void 0,
    appendArrows: scope.appendArrows ? angular.element(scope.appendArrows) : angular.element(element),
    prevArrow: scope.prevArrow ? angular.element(scope.prevArrow) : void 0,
    nextArrow: scope.nextArrow ? angular.element(scope.nextArrow) : void 0,
    centerMode: scope.centerMode === 'true',
    centerPadding: scope.centerPadding || '50px',
    cssEase: scope.cssEase || 'ease',
    customPaging: attr.customPaging ? function (slick, index) {
      return scope.customPaging({slick: slick, index: index});
    } : void 0,
    dots: scope.dots === 'true',
    draggable: scope.draggable !== 'false',
    fade: scope.fade === 'true',
    focusOnSelect: scope.focusOnSelect === 'true',
    easing: scope.easing || 'linear',
    edgeFriction: scope.edgeFriction || 0.15,
    infinite: scope.infinite !== 'false',
    initialSlide: parseInt(scope.initialSlide) || 0,
    lazyLoad: scope.lazyLoad || 'ondemand',
    mobileFirst: scope.mobileFirst === 'true',
    pauseOnHover: scope.pauseOnHover !== 'false',
    pauseOnDotsHover: scope.pauseOnDotsHover === "true",
    respondTo: scope.respondTo != null ? scope.respondTo : 'window',
    responsive: scope.responsive || void 0,
    rows: scope.rows != null ? parseInt(scope.rows, 10) : 1,
    slide: scope.slide || '',
    slidesPerRow: scope.slidesPerRow != null ? parseInt(scope.slidesPerRow, 10) : 1,
    slidesToShow: scope.slidesToShow != null ? parseInt(scope.slidesToShow, 10) : 1,
    slidesToScroll: scope.slidesToScroll != null ? parseInt(scope.slidesToScroll, 10) : 1,
    speed: scope.speed != null ? parseInt(scope.speed, 10) : 300,
    swipe: scope.swipe !== 'false',
    swipeToSlide: scope.swipeToSlide === 'true',
    touchMove: scope.touchMove !== 'false',
    touchThreshold: scope.touchThreshold ? parseInt(scope.touchThreshold, 10) : 5,
    useCSS: scope.useCSS !== 'false',
    variableWidth: scope.variableWidth === 'true',
    vertical: scope.vertical === 'true',
    verticalSwiping: scope.verticalSwiping === 'true',
    rtl: scope.rtl === 'true'
    */
  };

}
