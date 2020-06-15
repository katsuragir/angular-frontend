import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { DomainURL } from '../../../shared/domainURL';

@Component({
  selector: 'app-parallax-banner',
  templateUrl: './parallax-banner.component.html',
  styleUrls: ['./parallax-banner.component.scss']
})
export class ParallaxBannerComponent implements OnInit {

  public sliderConfig: any = {
    autoplay: true,
    autoplaySpeed: 3000
  };

  public sliderConfig2: any = {
    autoplay: true,
    autoplaySpeed: 3000
  };

  public sliderConfig3: any = {
    autoplay: true,
    autoplaySpeed: 3000
  };

  imgUrl: string;

  constructor(private domainUrl: DomainURL) { }

  ngOnInit() {
    this.imgUrl = this.domainUrl.domain;
  }

}
