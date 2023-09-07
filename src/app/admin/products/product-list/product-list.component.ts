import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';
import { Category } from 'src/app/model/category.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productRepository: ProductRepository) {}

  ngOnInit() {}

  getProducts(category: Category | null): Product[] {
    if (category === null) {
      // If category is null, call the method without passing the category argument
      return this.productRepository.getProducts(null);
    } else {
      // If category is provided, pass it as an argument
      return this.productRepository.getProducts(category);
    }
  }
  
  
  
  

  deleteProduct(product: Product) {
    this.productRepository.deleteProduct(product);
  }
}
