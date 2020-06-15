import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DomainURL } from '../../shared/domainURL';
declare var $: any;

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss']
})
export class PressComponent implements OnInit {

  public code = '';
  imgUrl: string;

  youtubeUrl: SafeResourceUrl;

  public sliderConfig: any = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    infinite: false,
    fade: false,
    draggable: false,
    dots: true,
    enabled: false,
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



  constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute, private domainUrl: DomainURL) { }

  ngOnInit() {
    this.imgUrl = this.domainUrl.domain;
    const youtube = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/HbW6YX0Q1PI');
    // tslint:disable-next-line: no-unused-expression
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id === 'news') {
        // document.getElementById('news-tab').classList.add('active');
        // document.getElementById('news').classList.add('active');
        document.getElementById('images-tab').classList.remove('active');
        document.getElementById('images').classList.remove('active');
        this.sliderConfig.enabled = false;
        document.getElementById('videos-tab').classList.remove('active');
        document.getElementById('videos').classList.remove('active');
      } else if (id === 'images') {
        document.getElementById('images-tab').classList.add('active');
        document.getElementById('images').classList.add('active');
        this.sliderConfig.enabled = true;
        // document.getElementById('news-tab').classList.remove('active');
        // document.getElementById('news').classList.remove('active');
        document.getElementById('videos-tab').classList.remove('active');
        document.getElementById('videos').classList.remove('active');
      } else if (id === 'videos') {
        document.getElementById('videos-tab').classList.add('active');
        document.getElementById('videos').classList.add('active');
        // document.getElementById('news-tab').classList.remove('active');
        // document.getElementById('news').classList.remove('active');
        document.getElementById('images-tab').classList.remove('active');
        document.getElementById('images').classList.remove('active');
        this.sliderConfig.enabled = false;
      } else {
        document.getElementById('images-tab').classList.add('active');
        document.getElementById('images').classList.add('active');
        this.sliderConfig.enabled = true;
        // document.getElementById('news-tab').classList.remove('active');
        // document.getElementById('news').classList.remove('active');
        document.getElementById('videos-tab').classList.remove('active');
        document.getElementById('videos').classList.remove('active');
      }
    });
    // console.log(youtube);
  }

  video(code) {
    this.code = code;
    this.youtubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.code);
    if (this.code !== '') {
      return document.getElementById('gjs-video').classList.add('display');
    }
  }

  close() {
    document.getElementById('gjs-video').classList.remove('display');
  }

  
}
