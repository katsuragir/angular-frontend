import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DomainURL } from '../../../../shared/domainURL';
declare var $: any;

@Component({
  selector: 'app-p-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.scss']
})
export class ParameterComponent implements OnInit {

  imgUrl: string;

  constructor(private domainUrl: DomainURL) { }

  ngOnInit() {
    this.imgUrl = this.domainUrl.domain;
  }

}
