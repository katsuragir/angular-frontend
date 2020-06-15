import { Component, OnInit } from '@angular/core';
import { DomainURL } from '../../../shared/domainURL';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private domainUrl: DomainURL) { }

  ngOnInit() { }

  // Slick slider config
  public blogSlideConfig: any = {
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [{
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  // Blog
  public blog = [{
      image: `${this.domainUrl.domain}/images/front/where to buy.png`,
      date: '25 January 2018',
      title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
      by: 'John Dio'
    }, {
      image: `${this.domainUrl.domain}/images/front/support.png`,
      date: '26 January 2018',
      title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
      by: 'John Dio'
    }, {
      image: `${this.domainUrl.domain}/images/front/contact us.png`,
      date: '27 January 2018',
      title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
      by: 'John Dio'
    }]
  

}
