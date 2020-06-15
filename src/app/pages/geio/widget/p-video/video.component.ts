import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomainURL } from '../../../../shared/domainURL';
declare var $: any;

@Component({
  selector: 'app-p-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  imgUrl: string;

  constructor(private domainUrl: DomainURL) { }

  ngOnInit() {
    this.imgUrl = this.domainUrl.domain;
  }

}
