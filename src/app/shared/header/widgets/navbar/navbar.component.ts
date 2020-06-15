import { Component, OnInit } from '@angular/core';
import { MENUITEMS, Menu } from './navbar-items';
import { Router, ActivatedRoute } from "@angular/router";
import { LandingFixService } from '../../../../shared/services/landing-fix.service';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  public menuItems: Menu[];

  constructor(private fix: LandingFixService) { }

  ngOnInit() {
  	this.menuItems = MENUITEMS.filter(menuItem => menuItem);
  }

  closeNav() {
    this.fix.removeNavFix();
 }

}
