import { Component, OnInit, HostListener } from '@angular/core';
import { DomainURL } from '../../../shared/domainURL';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  imgUrl: string;
  public innerWidth: any;

  constructor(private domainUrl: DomainURL) { }

  ngOnInit() {
    this.imgUrl = this.domainUrl.domain;
    this.innerWidth = window.innerWidth;
  }
  
  // Slick slider config
  public sliderConfig: any = {
    autoplay: true,
    autoplaySpeed: 3000
  };

  @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.innerWidth = window.innerWidth;
      // console.log(this.innerWidth);
    }

}
