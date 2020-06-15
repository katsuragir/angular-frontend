import { Component, OnInit } from '@angular/core';
import { DomainURL } from '../../../../shared/domainURL';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss']
})
export class CopyrightComponent implements OnInit {
  
  today: number = Date.now();
  imgUrl: string;
  
  constructor(private domainUrl: DomainURL) { }

  ngOnInit() {
    this.imgUrl = this.domainUrl.domain;
  }

}
