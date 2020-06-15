import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { DomainURL } from '../../../../shared/domainURL';
declare var $: any;

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {

  image = '';
  judul = '';
  desc = '';
  imgUrl: string;

  constructor(@Inject(DOCUMENT) private document: Document, private domainUrl: DomainURL) { }

  ngOnInit() {
    this.imgUrl = this.domainUrl.domain;
    this.activityover();
  }

  activityover() {
    this.document.getElementById('acti').classList.add('on');
    this.document.getElementById('easy').classList.remove('on');
    this.document.getElementById('edu').classList.remove('on');
    this.image = `${this.domainUrl.domain}/images/front/pic34.jpg`;
    this.judul = 'Teach Through Lively Activities';
    this.desc = 'Integrate entertainment and education, and let your children master basic programming knowledge in a happy game.';
  }

  easyover() {
    this.document.getElementById('easy').classList.add('on');
    this.document.getElementById('acti').classList.remove('on');
    this.document.getElementById('edu').classList.remove('on');
    this.image = `${this.domainUrl.domain}/images/front/pic12.png`;
    this.judul = 'Easy To Use';
    this.desc = 'Use the most popular graphical programming methods to make programming easy to understand.';
  }

  eduover() {
    this.document.getElementById('edu').classList.add('on');
    this.document.getElementById('acti').classList.remove('on');
    this.document.getElementById('easy').classList.remove('on');
    this.image = `${this.domainUrl.domain}/images/front/pic13.png`;
    this.judul = 'Family Education';
    this.desc = 'Let GEIO be the bridge between parents and children, and use programming games to make parents and children more intimate. At the same time,the initial education of the child can be completed at home.';
  }
}
