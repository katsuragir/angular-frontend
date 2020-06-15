import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { IsotopeModule } from 'ngx-isotope';

import { AboutUsComponent } from './about-us/about-us.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LookbookComponent } from './lookbook/lookbook.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { CollectionComponent } from './collection/collection.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ContactComponent } from './contact/contact.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CompareComponent } from './compare/compare.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FaqComponent } from './faq/faq.component';
import { TypographyComponent } from './typography/typography.component';
import { GridTwoColComponent } from './portfolio/grid-two-col/grid-two-col.component';
import { GridThreeColComponent } from './portfolio/grid-three-col/grid-three-col.component';
import { GridFourColComponent } from './portfolio/grid-four-col/grid-four-col.component';
import { MasonaryTwoGridComponent } from './portfolio/masonary-two-grid/masonary-two-grid.component';
import { MasonaryThreeGridComponent } from './portfolio/masonary-three-grid/masonary-three-grid.component';
import { MasonaryFourGridComponent } from './portfolio/masonary-four-grid/masonary-four-grid.component';
import { MasonaryFullwidthComponent } from './portfolio/masonary-fullwidth/masonary-fullwidth.component';
import { GeioComponent } from './geio/geio.component';
import { SliderGEIOComponent } from './geio/widget/slider/slider.component';
import { AttrGEIOComponent } from './geio/widget/attr/attr.component';
import { AppUploadComponent } from './geio/widget/appupload/appupload.component';
import { PlayComponent } from './geio/widget/play/play.component';
import { VideoComponent } from './geio/widget/p-video/video.component';
import { ParameterComponent } from './geio/widget/p-parameter/parameter.component';
import { ProgramComponent } from './geio/widget/program/program.component';
import { AppUpdateComponent } from './geio/widget/app-update/app-update.component';
import { SupportComponent } from './support/support.component';
import { PressComponent } from './press/press.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ngfModule } from 'angular-file';
import { AuthNoticeComponent } from './auth-notice/auth-notice.component';
import { GenkerEXComponent } from './genker-ex/genker-ex.component';
import { VideoGankerEXComponent } from './genker-ex/widget/video/video.component';
import { SparatorComponent } from './genker-ex/widget/sparator/sparator.component';
import { ContentComponent } from './genker-ex/widget/content/content.component';
import { Content2Component } from './genker-ex/widget/content2/content2.component';
import { Content3Component } from './genker-ex/widget/content3/content3.component';
import { Content4Component } from './genker-ex/widget/content4/content4.component';
import { Content5Component } from './genker-ex/widget/content5/content5.component';
import { Content6Component } from './genker-ex/widget/content6/content6.component';
import { DownloadComponent } from './genker-ex/widget/download/download.component';
import { DownloadGeioComponent } from './geio/widget/download/download.component';
import { SpecGeioComponent } from './geio/widget/spec/spec.component';
import { ScenesGeioComponent } from './geio/widget/scenes/scenes.component';
import { VideoGeioComponent } from './geio/widget/video/video.component';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';

// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from '../shared/reducers/auth.reducers';
import { AuthEffects } from '../shared/effects/auth.effects';
import { AuthService } from '../shared/services/auth.service';
import { GoogleAnalyticsService } from '../shared/services/google-analytics.service';


@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    SlickCarouselModule,
    IsotopeModule,
    FormsModule,
    ReactiveFormsModule,
    ngfModule,
    ShowHidePasswordModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [
    AboutUsComponent,
    ErrorPageComponent,
    LookbookComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    WishlistComponent,
    CartComponent,
    CollectionComponent,
    ForgetPasswordComponent,
    ContactComponent,
    CheckoutComponent,
    CompareComponent,
    OrderSuccessComponent,
    DashboardComponent,
    FaqComponent,
    TypographyComponent,
    GridTwoColComponent,
    GridThreeColComponent,
    GridFourColComponent,
    MasonaryTwoGridComponent,
    MasonaryThreeGridComponent,
    MasonaryFourGridComponent,
    MasonaryFullwidthComponent,
    GeioComponent,
    SliderGEIOComponent,
    AttrGEIOComponent,
    AppUploadComponent,
    PlayComponent,
    VideoComponent,
    ParameterComponent,
    ProgramComponent,
    AppUpdateComponent,
    DownloadGeioComponent,
    SpecGeioComponent,
    ScenesGeioComponent,
    VideoGeioComponent,
    SupportComponent,
    PressComponent,
    AuthNoticeComponent,
    GenkerEXComponent,
    VideoGankerEXComponent,
    SparatorComponent,
    ContentComponent,
    Content2Component,
    Content3Component,
    Content4Component,
    Content5Component,
    Content6Component,
    DownloadComponent
  ]
})
export class PagesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PagesModule,
        providers: [
        AuthService,
        GoogleAnalyticsService
      ]
    };
  }
}
