import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { ShopComponent } from './shop.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],
    declarations: [ShopComponent, NavbarComponent, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
    exports: [ShopComponent, NavbarComponent, CartSummaryComponent, CartDetailComponent, CheckoutComponent]
})
export class ShopModule { }