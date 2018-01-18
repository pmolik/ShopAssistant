import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import {ProductService} from "./services/product.service";
import { ModalComponent } from './components/modal/modal.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { AccountComponent } from './components/account/account.component';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ModalComponent,
    AddFormComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
