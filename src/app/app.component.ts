import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsService } from './shared/services/google-analytics.service';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

   ip: any;

   constructor(translate: TranslateService, public router: Router, private analytic: GoogleAnalyticsService) {
      translate.setDefaultLang('en');
      translate.addLangs(['en', 'fr']);
      this.router.events.subscribe(event => {
         if (event instanceof NavigationEnd) {
             gtag('config', 'UA-146705167-1', { 'page_path': event.urlAfterRedirects } );

               this.analytic.getIpAddress().subscribe(
                  res => {
                     const name = 'sessionid';
                     localStorage.setItem(name, JSON.stringify(res.ip));
                     if (!JSON.parse(localStorage.getItem('sessionid')) || JSON.parse(localStorage.getItem('sessionid')) !== res.ip) {
                        const name = 'sessionid';
                        localStorage.setItem(name, JSON.stringify(res.ip));
                     }
                  }
               );

             // console.log(event.urlAfterRedirects);
             if (event.urlAfterRedirects === '/') {
                const data = {
                   eventname: 'Visit Website',
                   pages: event.urlAfterRedirects,
                   ip: JSON.parse(localStorage.getItem('sessionid'))
                };
               this.analytic.customerVisit(data).subscribe(
                  result => {
                     console.log(result.text);
                  }
               );
             } else if (event.urlAfterRedirects === '/pages/geio') {
               const data = {
                  eventname: 'Geio',
                  pages: event.urlAfterRedirects,
                  ip: JSON.parse(localStorage.getItem('sessionid'))
               };
              this.analytic.customerGeio(data).subscribe(
                 result => {
                   // console.log(result.text);
                 }
              );
             } else if (event.urlAfterRedirects === '/pages/ganker-ex') {
               const data = {
                  eventname: 'Ganker-EX',
                  pages: event.urlAfterRedirects,
                  ip: JSON.parse(localStorage.getItem('sessionid'))
               };
              this.analytic.customerGanker(data).subscribe(
                 result => {
                   // console.log(result.text);
                 }
              );
             }
          }
       }
    );
   }

}
