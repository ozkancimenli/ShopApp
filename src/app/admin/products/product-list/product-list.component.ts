import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

constructor(private productRepository: ProductRepository){}

ngOnInit() {
  
}

getProducts(): Product[] {
  return  this.productRepository.getProducts();
}
deleteProduct(productId: number) {
  // Burada ürünü silme işlemini gerçekleştirin
}

}
