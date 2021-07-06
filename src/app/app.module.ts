import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/cart/products/products.component';
import { OrderComponent } from './components/cart/order/order.component';
import { OrderItemComponent } from './components/cart/order/order-item/order-item.component';
import { ProductItemComponent } from './components/cart/products/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    ProductsComponent,
    OrderComponent,
    OrderItemComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
