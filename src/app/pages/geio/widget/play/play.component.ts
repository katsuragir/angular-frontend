import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { DOCUMENT } from '@angular/common';
import { DomainURL } from '../../../../shared/domainURL';
declare var $: any;

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
  
  @ViewChild('slickModal', { static: true }) slickModal: SlickCarouselComponent;

  imgUrl: string;

  constructor(@Inject(DOCUMENT) private document: Document, private domainUrl: DomainURL) { }

  ngOnInit() {
    this.imgUrl = this.domainUrl.domain;
    this.race();
  }

  race() {
    this.document.getElementById('race').classList.add('on');
    this.document.getElementById('battle').classList.remove('on');
    this.document.getElementById('knight').classList.remove('on');
    this.document.getElementById('explore').classList.remove('on');
    this.document.getElementById('treasure').classList.remove('on');
    this.document.getElementById('AR').classList.remove('on');
    this.document.getElementById('programming').classList.remove('on');
    this.document.getElementById('drive').classList.remove('on');
    this.slickModal.slickGoTo(0);
  }

  battle() {
    this.document.getElementById('race').classList.remove('on');
    this.document.getElementById('battle').classList.add('on');
    this.document.getElementById('knight').classList.remove('on');
    this.document.getElementById('explore').classList.remove('on');
    this.document.getElementById('treasure').classList.remove('on');
    this.document.getElementById('AR').classList.remove('on');
    this.document.getElementById('programming').classList.remove('on');
    this.document.getElementById('drive').classList.remove('on');
    this.slickModal.slickGoTo(1);
  }

  knight() {
    this.document.getElementById('race').classList.remove('on');
    this.document.getElementById('battle').classList.remove('on');
    this.document.getElementById('knight').classList.add('on');
    this.document.getElementById('explore').classList.remove('on');
    this.document.getElementById('treasure').classList.remove('on');
    this.document.getElementById('AR').classList.remove('on');
    this.document.getElementById('programming').classList.remove('on');
    this.document.getElementById('drive').classList.remove('on');
    this.slickModal.slickGoTo(2);
  }

  explore() {
    this.document.getElementById('race').classList.remove('on');
    this.document.getElementById('battle').classList.remove('on');
    this.document.getElementById('knight').classList.remove('on');
    this.document.getElementById('explore').classList.add('on');
    this.document.getElementById('treasure').classList.remove('on');
    this.document.getElementById('AR').classList.remove('on');
    this.document.getElementById('programming').classList.remove('on');
    this.document.getElementById('drive').classList.remove('on');
    this.slickModal.slickGoTo(3);
  }

  treasure() {
    this.document.getElementById('race').classList.remove('on');
    this.document.getElementById('battle').classList.remove('on');
    this.document.getElementById('knight').classList.remove('on');
    this.document.getElementById('explore').classList.remove('on');
    this.document.getElementById('treasure').classList.add('on');
    this.document.getElementById('AR').classList.remove('on');
    this.document.getElementById('programming').classList.remove('on');
    this.document.getElementById('drive').classList.remove('on');
    this.slickModal.slickGoTo(4);
  }

  AR() {
    this.document.getElementById('race').classList.remove('on');
    this.document.getElementById('battle').classList.remove('on');
    this.document.getElementById('knight').classList.remove('on');
    this.document.getElementById('explore').classList.remove('on');
    this.document.getElementById('treasure').classList.remove('on');
    this.document.getElementById('AR').classList.add('on');
    this.document.getElementById('programming').classList.remove('on');
    this.document.getElementById('drive').classList.remove('on');
    this.slickModal.slickGoTo(5);
  }

  programming() {
    this.document.getElementById('race').classList.remove('on');
    this.document.getElementById('battle').classList.remove('on');
    this.document.getElementById('knight').classList.remove('on');
    this.document.getElementById('explore').classList.remove('on');
    this.document.getElementById('treasure').classList.remove('on');
    this.document.getElementById('AR').classList.remove('on');
    this.document.getElementById('programming').classList.add('on');
    this.document.getElementById('drive').classList.remove('on');
    this.slickModal.slickGoTo(6);
  }

  drive() {
    this.document.getElementById('race').classList.remove('on');
    this.document.getElementById('battle').classList.remove('on');
    this.document.getElementById('knight').classList.remove('on');
    this.document.getElementById('explore').classList.remove('on');
    this.document.getElementById('treasure').classList.remove('on');
    this.document.getElementById('AR').classList.remove('on');
    this.document.getElementById('programming').classList.remove('on');
    this.document.getElementById('drive').classList.add('on');
    this.slickModal.slickGoTo(7);
  }

  public sliderConfig: any = {
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    infinite: false,
    fade: true,
    draggable: false
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
