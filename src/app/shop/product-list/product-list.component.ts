import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { Category } from 'src/app/model/category.model';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] = [];

  selectedProduct: Product | undefined;

  public selectedCategory: Category;
  public productsPerPage = 2;
  public selectedPage = 1;
  newPageNumbers = [1, 2, 3, 4, 5];
  public selectedProducts: Product[] = [];

  constructor(private cart: Cart,
    private router: Router,
    private productRepository: ProductRepository,) {

  }
  ngOnInit() {

  }
  addProductToCart(product: Product) {
    this.cart.addItem(product);
    this.router.navigateByUrl('/cart');
  }
  displayDetails(product: Product) {
    this.selectedProduct = product;

  }
  hideDetails() {
    this.selectedProduct = undefined;
  }


}

