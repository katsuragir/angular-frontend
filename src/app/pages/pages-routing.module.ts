import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import { TypographyComponent } from './typography/typography.component';
import { FaqComponent } from './faq/faq.component';
import { GeioComponent } from './geio/geio.component';
// Portfolio Page
import { GridTwoColComponent } from './portfolio/grid-two-col/grid-two-col.component';
import { GridThreeColComponent } from './portfolio/grid-three-col/grid-three-col.component';
import { GridFourColComponent } from './portfolio/grid-four-col/grid-four-col.component';
import { MasonaryTwoGridComponent } from './portfolio/masonary-two-grid/masonary-two-grid.component';
import { MasonaryThreeGridComponent } from './portfolio/masonary-three-grid/masonary-three-grid.component';
import { MasonaryFourGridComponent } from './portfolio/masonary-four-grid/masonary-four-grid.component';
import { MasonaryFullwidthComponent } from './portfolio/masonary-fullwidth/masonary-fullwidth.component';
import { SupportComponent } from './support/support.component';
import { PressComponent } from './press/press.component';
import { GenkerEXComponent } from './genker-ex/genker-ex.component';
import { DownloadComponent } from './genker-ex/widget/download/download.component';
import { DownloadGeioComponent } from './geio/widget/download/download.component';
import { SpecGeioComponent } from './geio/widget/spec/spec.component';
import { ScenesGeioComponent } from './geio/widget/scenes/scenes.component';
import { VideoGeioComponent } from './geio/widget/video/video.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'geio',
        component: GeioComponent
      },
      {
        path: 'geio/download',
        component: DownloadGeioComponent
      },
      {
        path: 'geio/parameter',
        component: SpecGeioComponent
      },
      {
        path: 'geio/view',
        component: ScenesGeioComponent
      },
      {
        path: 'geio/video',
        component: VideoGeioComponent
      },
      {
        path: 'ganker-ex',
        component: GenkerEXComponent
      },
      {
        path: 'genker-ex/gankerEX_Download',
        component: DownloadComponent
      },
      {
        path: 'support',
        component: SupportComponent
      },
      {
        path: 'support/:id',
        component: SupportComponent
      },
      {
        path: 'about',
        component: AboutUsComponent
      },
      {
        path: 'about/:id',
        component: AboutUsComponent
      },
      {
        path: 'press',
        component: PressComponent
      },
      {
        path: 'press/:id',
        component: PressComponent
      },
      {
        path: '404',
        component: ErrorPageComponent
      },
      {
        path: 'lookbook',
        component: LookbookComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'wishlist',
        component: WishlistComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'collection',
        component: CollectionComponent
      },
      {
        path: 'forgetpassword',
        component: ForgetPasswordComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'checkout',
        component: CheckoutComponent
      },
      {
        path: 'compare',
        component: CompareComponent
      },
      {
        path: 'order-success',
        component: OrderSuccessComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'typography',
        component: TypographyComponent
      },
      {
        path: 'faq',
        component: FaqComponent
      },
      {
        path: 'grid/two/column',
        component: GridTwoColComponent
      },
      {
        path: 'grid/three/column',
        component: GridThreeColComponent
      },
      {
        path: 'grid/four/column',
        component: GridFourColComponent
      },
      {
        path: 'grid/two/masonary',
        component: MasonaryTwoGridComponent
      },
      {
        path: 'grid/three/masonary',
        component: MasonaryThreeGridComponent
      },
      {
        path: 'grid/four/masonary',
        component: MasonaryFourGridComponent
      },
      {
        path: 'fullwidth/masonary',
        component: MasonaryFullwidthComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
