import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShopModule } from './shop/shop.module';
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { rootRouterConfig } from './app-routing.module';
// import ngx-translate and the http loader
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
// components
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import * as $ from 'jquery';
import { AuthService } from './shared/services/auth.service';
import { PagesModule } from './pages/pages.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './shared/reducers';
import { NgxSpinnerModule } from 'ngx-spinner';
import { GoogleAnalyticsService } from './shared/services/google-analytics.service';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
   return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    NgxSpinnerModule,
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    ShopModule,
    SharedModule,
    HttpClientModule,
    NgbModule,
    NgxUsefulSwiperModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([]),
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    ToastrModule.forRoot({
      timeOut: 2000,
      progressBar: false,
      enableHtml: true,
    }),
    RouterModule.forRoot(rootRouterConfig, { useHash: false, anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
    NgxGoogleAnalyticsModule.forRoot('UA-146705167-1')
  ],
  providers: [AuthService, GoogleAnalyticsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
