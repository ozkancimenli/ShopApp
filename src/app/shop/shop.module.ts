import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { ShopComponent } from './shop.component';

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],
    declarations: [ShopComponent],
    exports: [ShopComponent]
})
export class ShopModule { }