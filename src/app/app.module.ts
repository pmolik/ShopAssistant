import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap/modal';
import {CarouselModule} from 'ngx-bootstrap/carousel'
import {CollapseModule} from 'ngx-bootstrap/collapse'

import {AppComponent} from './app.component';
import {CartComponent} from './components/cart/cart.component';
import {ProductService} from "./services/product.service";
import {ModalComponent} from './components/modal/modal.component';
import {AddFormComponent} from './components/add-form/add-form.component';
import {AccountComponent} from './components/account/account.component';
import {SortComponent} from './components/sort/sort.component';
import {NavbarComponent} from './components/navigation/navbar/navbar.component';
import {SidebarComponent} from './components/navigation/sidebar/sidebar.component';
import {FooterComponent} from './components/navigation/footer/footer.component';
import {CarouselComponent} from './components/carousel/carousel.component';

import {appRouterModule} from '../app/app.routes';
import { AboutComponent } from './components/about/about.component'


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ModalComponent,
    AddFormComponent,
    AccountComponent,
    SortComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    CarouselComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRouterModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
