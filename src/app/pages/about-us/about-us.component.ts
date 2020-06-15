import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export const IMAGES: any[] = [
  {
    image: 'https://res.gjs.so/website/img/1554893754(1).jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/1554893708(1).jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/1554893613(1).jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/1554893719(1).jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/1554893762(1).jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/1554893634(1).jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/1554893745(1).jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/1554893697(1).jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/1.jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/2.jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/3.jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/4.jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/5.jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/6.jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/7.jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/8.jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/9.jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/10.jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/11.jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/12.jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/13.jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/14.jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/15.jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/16.jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/17.jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/18.png'
  },
  {
    image: 'https://res.gjs.so/website/img/19.jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/20.jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/21.jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/22.jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/23.jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/24.png'
  },
  {
    image: 'https://res.gjs.so/website/img/25.png'
  },
  {
    image: 'https://res.gjs.so/website/img/26.png'
  },
  {
    image: 'https://res.gjs.so/website/img/27.png'
  },
  {
    image: 'https://res.gjs.so/website/img/28.png'
  },
  {
    image: 'https://res.gjs.so/website/img/29.jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/30.jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/31.jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/32.jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/33.jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/34.jpg'
  }
  ,
  {
    image: 'https://res.gjs.so/website/img/35.jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/36.jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/37.jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/38.jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/39.jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/40.jpg'
  },
  {
    image: 'https://res.gjs.so/website/img/41.png'
  },
  {
    image: 'https://res.gjs.so/website/img/42.png'
  },
  {
    image: 'https://res.gjs.so/website/img/43.png'
  },
  {
    image: 'https://res.gjs.so/website/img/44.png'
  },
  {
    image: 'https://res.gjs.so/website/img/45.png'
  },
  {
    image: 'https://res.gjs.so/website/img/46.png'
  },
  {
    image: 'https://res.gjs.so/website/img/47.png'
  },
  {
    image: 'https://res.gjs.so/website/img/48.png'
  },
  {
    image: 'https://res.gjs.so/website/img/49.png'
  },
  {
    image: 'https://res.gjs.so/website/img/50.png'
  },
  {
    image: 'https://res.gjs.so/website/img/51.png'
  },
  {
    image: 'https://res.gjs.so/website/img/52.png'
  },
  {
    image: 'https://res.gjs.so/website/img/53.png'
  }
];

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  public images: any[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.images = IMAGES.filter(x => x);
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id === 'gjs') {
        document.getElementById('company-tab').classList.add('active');
        document.getElementById('company').classList.add('active');
        document.getElementById('contact-tab').classList.remove('active');
        document.getElementById('contact').classList.remove('active');
        document.getElementById('player-tab').classList.remove('active');
        document.getElementById('player').classList.remove('active');
      } else if (id === 'contact') {
        document.getElementById('contact-tab').classList.add('active');
        document.getElementById('contact').classList.add('active');
        document.getElementById('company-tab').classList.remove('active');
        document.getElementById('company').classList.remove('active');
        document.getElementById('player-tab').classList.remove('active');
        document.getElementById('player').classList.remove('active');
      } else if (id === 'players') {
        document.getElementById('player-tab').classList.add('active');
        document.getElementById('player').classList.add('active');
        document.getElementById('company-tab').classList.remove('active');
        document.getElementById('company').classList.remove('active');
        document.getElementById('contact-tab').classList.remove('active');
        document.getElementById('contact').classList.remove('active');
      } else {
        document.getElementById('company-tab').classList.add('active');
        document.getElementById('company').classList.add('active');
        document.getElementById('contact-tab').classList.remove('active');
        document.getElementById('contact').classList.remove('active');
        document.getElementById('player-tab').classList.remove('active');
        document.getElementById('player').classList.remove('active');
      }
    });
  }

  // Testimonial Carousel
  public testimonial = [{
     image: 'assets/images/avtar.jpg',
     name: 'Mark jkcno',
     designation: 'Designer',
     description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
   }, {
     image: 'assets/images/2.jpg',
     name: 'Adegoke Yusuff',
     designation: 'Content Writer',
     description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
   }, {
     image: 'assets/images/avtar.jpg',
     name: 'John Shipmen',
     designation: 'Lead Developer',
     description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
  }]

  // Teastimonial Slick slider config
  public testimonialSliderConfig = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
  };

  // Team 
  public team = [{
     image: 'assets/images/team/1.jpg',
     name: 'Mark jkcno',
     designation: 'Designer'
   }, {
     image: 'assets/images/team/2.jpg',
     name: 'Adegoke Yusuff',
     designation: 'Content Writer'
   }, {
     image: 'assets/images/team/3.jpg',
     name: 'John Shipmen',
     designation: 'Lead Developer'
   }, {
     image: 'assets/images/team/4.jpg',
     name: 'Hileri Keol',
     designation: 'CEO & Founder at Company'
   }, {
     image: 'assets/images/team/3.jpg',
     name: 'John Shipmen',
     designation: 'Lead Developer'
  }]

  // Team Slick slider config
  public teamSliderConfig = {
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 586,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
     ]
  };

}
