import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomainURL } from '../../../../shared/domainURL';
declare var $: any;

@Component({
  selector: 'app-appupload',
  templateUrl: './appupload.component.html',
  styleUrls: ['./appupload.component.scss']
})
export class AppUploadComponent implements OnInit {

  imgUrl: string;

  constructor(private domainUrl: DomainURL) { }

  ngOnInit() {
    this.imgUrl = this.domainUrl.domain;
  }

}
