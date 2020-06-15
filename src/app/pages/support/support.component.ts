import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomainURL } from '../../shared/domainURL';
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

export const Retailers: any[] = [
    {
        // tslint:disable-next-line: max-line-length
        title: 'Helihantoys', image: 'helihantoys.png', address: 'Jl. Jend. R.S. Soekanto No.1, RT.1/RW.11, Malaka Jaya, Kec. Duren Sawit, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13460', area: 'West Java', type: 'distributor'
    },
    {
        title: '', image: 'coming-soon.png', address: '', area: '', type: 'distributor'
    },
    {
        title: '', image: 'coming-soon.png', address: '', area: '', type: 'distributor'
    },
    {
        title: '', image: 'coming-soon.png', address: '', area: '', type: 'retailer'
    },
    {
        title: '', image: 'coming-soon.png', address: '', area: '', type: 'retailer'
    },
    {
        title: '', image: 'coming-soon.png', address: '', area: '', type: 'retailer'
    }
];

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

    public download: any[];
    public app: any[];
    public distributors: any[];
    public retailers: any[];
    imgUrl: string;

  constructor(private route: ActivatedRoute, private domainUrl: DomainURL) { }

  ngOnInit() {
    this.imgUrl = this.domainUrl.domain;
        this.download = DOWNLOADLIST.filter(x => x);
        this.app = APPLIST.filter(x => x);
        this.distributors = Retailers.filter(x => x.type === 'distributor');
        this.retailers = Retailers.filter(x => x.type === 'retailer');
        this.route.params.subscribe(params => {
        const id = params['id'];
        if (id === 'returns&warranty') {
            document.getElementById('warranty-tab').classList.add('active');
            document.getElementById('warranty').classList.add('active');
            document.getElementById('retailers-tab').classList.remove('active');
            document.getElementById('retailers').classList.remove('active');
            document.getElementById('download-tab').classList.remove('active');
            document.getElementById('download').classList.remove('active');
        } else if (id === 'retailers') {
            document.getElementById('retailers-tab').classList.add('active');
            document.getElementById('retailers').classList.add('active');
            document.getElementById('warranty-tab').classList.remove('active');
            document.getElementById('warranty').classList.remove('active');
            document.getElementById('download-tab').classList.remove('active');
            document.getElementById('download').classList.remove('active');
        } else if (id === 'download') {
            document.getElementById('download-tab').classList.add('active');
            document.getElementById('download').classList.add('active');
            document.getElementById('retailers-tab').classList.remove('active');
            document.getElementById('retailers').classList.remove('active');
            document.getElementById('warranty-tab').classList.remove('active');
            document.getElementById('warranty').classList.remove('active');
        } else {
            document.getElementById('warranty-tab').classList.add('active');
            document.getElementById('warranty').classList.add('active');
            document.getElementById('retailers-tab').classList.remove('active');
            document.getElementById('retailers').classList.remove('active');
            document.getElementById('download-tab').classList.remove('active');
            document.getElementById('download').classList.remove('active');
        }
    });
  }

}
