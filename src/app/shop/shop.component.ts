import { Component } from "@angular/core";
import { ProductRepository } from "../model/product.repository";
import { CategoryRepository } from "../model/category.repository";
import { Product } from "../model/product.model";
import { Category } from "../model/category.model";

@Component({
    selector: 'shop',
    templateUrl: 'shop.component.html',
    styles: [`
    .pt-100 {padding-top:100px;}
    `]
})
export class ShopComponent {
    public selectedCategory: Category;
    public productsPerPage = 2;
    public selectedPage = 1;
    newPageNumbers = [1, 2, 3, 4, 5];


    constructor(
        private productRepository: ProductRepository,
        private categoryRepository: CategoryRepository
    ) { }

    get products(): Product[] {
        let index = (this.selectedPage - 1) * this.productsPerPage;
        return this.productRepository
            .getProducts(this.selectedCategory)
            .slice(index, index + this.productsPerPage);
    }

    get pageNumbers(): number[] {
        return Array(Math.ceil(this.productRepository
            .getProducts(this.selectedCategory)
            .length / this.productsPerPage))
            .fill(0)
            .map((a, i) => i + 1)
    }

    changePage(p: number) {
        this.selectedPage = p;
    }

    get categories(): Category[] {
        return this.categoryRepository.getCategories();
    }

    changeCategory(newCategory?: Category) {
        if (newCategory) {
            this.selectedCategory = newCategory;
        }
        return this.selectedCategory;
    }
}