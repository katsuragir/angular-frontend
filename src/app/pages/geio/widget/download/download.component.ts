import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ProductsService } from '../../../../shared/services/products.service';
import { CartService } from '../../../../shared/services/cart.service';
import { WishlistService } from '../../../../shared/services/wishlist.service';
import { LandingFixService } from '../../../../shared/services/landing-fix.service';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from '../../../../shared/services/windows.service';
declare var $: any;

export const DOWNLOADLIST: any[] = [
  {
      path: 'https://res.gjs.so/download/geio/GAMEPAD_MANUAL_V1.0_CN.pdf', time: '2018-11-26', name: 'GAMEPAD_MANUAL_V1.0_CN', type: 'PDF'
  },
  {
      path: 'https://res.gjs.so/download/geio/GAMEPAD_MANUAL_V1.0_EN.pdf', time: '2018-11-26', name: 'GAMEPAD_MANUAL_V1.0_EN', type: 'PDF'
  },
  {
      path: 'https://res.gjs.so/download/geio/GAMEPAD_MANUAL_V1.0_FR.pdf', time: '2018-11-26', name: 'GAMEPAD_MANUAL_V1.0_FR', type: 'PDF'
  },
  {
      path: 'https://res.gjs.so/download/geio/GEIO_USER_MANUAL_V4.0_CN.pdf', time: '2019-03-14', name: 'GEIO_USER_MANUAL_V4.0_CN', type: 'PDF'
  },
  {
      path: 'https://res.gjs.so/download/geio/GEIO_USER_MANUAL_V4.0_EN.pdf', time: '2019-03-14', name: 'GEIO_USER_MANUAL_V4.0_EN', type: 'PDF'
  },
  {
      path: 'https://res.gjs.so/download/geio/GEIO_USER_MANUAL_V1.0_FR.pdf', time: '2018-11-26', name: 'GEIO_USER_MANUAL_V1.0_FR', type: 'PDF'
  },
  {
      path: 'http://res.gjs.so/download/geio/GEIO-AR-MAP-A3.jpg', time: '2019-03-12', name: 'GEIO AR MAP', type: 'JPG'
  },
  {
      path: 'http://res.gjs.so/download/geio/GEIO-AR-STICKER-A5.jpg', time: '2019-03-12', name: 'GEIO AR STICKER', type: 'JPG'
  },
  {
      path: 'http://res.gjs.so/download/geio/GEIO-AR-QUICK-GUIDE.jpg', time: '2019-03-12', name: 'GEIO AR QUICK GUIDE', type: 'JPG'
  },
  {
      path: 'http://res.gjs.so/download/geio/GEIO_AR_INSTRUCTION_CN.pdf', time: '2019-03-14', name: 'GEIO_AR_INSTRUCTION_CN', type: 'PDF'
  },
  {
      path: 'http://res.gjs.so/download/geio/GEIO_AR_INSTRUCTION_EN.pdf', time: '2019-03-14', name: 'GEIO_AR_INSTRUCTION_EN', type: 'PDF'
  },
  {
      path: 'http://res.gjs.so/download/geio/GEIO_USER_MANUAL_V3.4_RU.pdf', time: '2019-03-16', name: 'GEIO_USER_MANUAL_V3.4_RU', type: 'PDF'
  },
  {
      path: 'http://res.gjs.so/download/geio/GEIO_USER_MANUAL_4.0_JP.pdf', time: '2019-05-16', name: 'GEIO_USER_MANUAL_4.0_JP', type: 'PDF'
  },
  {
      path: 'http://res.gjs.so/download/geio/GEIO_USER_MANUAL_V4.0_FR.pdf', time: '2019-05-16', name: 'GEIO_USER_MANUAL_V4.0_FR', type: 'PDF'
  },
  {
      path: 'http://res.gjs.so/download/geio/GEIO_USER_MANUAL_V4.0_RU.pdf', time: '2019-05-16', name: 'GEIO_USER_MANUAL_V4.0_RU', type: 'PDF'
  },
];

export const APPLIST: any[] = [
  {
      path: 'https://res.gjs.so/download/geio/geio.apk', time: '2019-03-12', name: 'Android Geio APP', type: 'APP'
  },
  {
      path: 'https://itunes.apple.com/app/geio/id1291673794', time: '2019-03-12', name: 'IOS Geio APP', type: 'APP'
  }
];

@Component({
  selector: 'app-download-geio',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss'],
  providers: [ProductsService, CartService, WishlistService]
})
export class DownloadGeioComponent implements OnInit {

  public download: any[];
  public app: any[];

  public url : any; 

  constructor(private router: Router, private fix: LandingFixService,
    @Inject(DOCUMENT) private document: Document, @Inject(WINDOW) private window) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
        // console.log(this.url);
      }
    });
   }

  ngOnInit() {
    this.download = DOWNLOADLIST.filter(x => x);
    this.app = APPLIST.filter(x => x);
    $.getScript('assets/js/script.js');
  }

  openNav() {
    this.fix.addNavFix();
}

closeNav() {
   this.fix.removeNavFix();
}

// @HostListener Decorator
@HostListener('window:scroll', [])
onWindowScroll() {
  const number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
  // console.log(number);
    if (number >= 50) {
      this.document.getElementById('crumb').classList.add('fixed');
    } else {
      this.document.getElementById('crumb').classList.remove('fixed');
    }
}

}
