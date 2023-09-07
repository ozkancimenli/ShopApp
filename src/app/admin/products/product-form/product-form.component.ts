import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  editing: boolean = false;
  product: Product = new Product();

  constructor(
    private activeRoute: ActivatedRoute,
    private repository: ProductRepository
  ) {
    this.editing = activeRoute.snapshot.params['mode'] == 'edit';
    if (this.editing) {
      this.product = repository.getProduct(activeRoute.snapshot.params['id']);
    }
  }
  save(form: NgForm) {
    // Burada formu kaydetme işlemini gerçekleştirin
}

  ngOnInit() {}
}
