import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomainURL } from '../../../../shared/domainURL';
declare var $: any;

@Component({
  selector: 'app-attr-geio',
  templateUrl: './attr.component.html',
  styleUrls: ['./attr.component.scss']
})
export class AttrGEIOComponent implements OnInit {

  imgUrl: string;

  constructor(private domainUrl: DomainURL) { }

  ngOnInit() {
    this.imgUrl = this.domainUrl.domain;
  }

}
