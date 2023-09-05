import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable()
export class Cart {
    public items: CartItem[] = [];
    public itemCount: number = 0;
    public total: number = 0;

    addItem(product: Product, quantity: number = 1) {
        let item = this.items.find(i => i.product.id == product.id);
        if (item != undefined) {
            item.quantity += quantity;
        } else {
            this.items.push(new CartItem(product, quantity));
        }
        this.calculate();
    }

    updateQuantity(product: Product, quantity: number) {
        let item = this.items.find(i => i.product.id == product.id);
        if (item != undefined) {
            item.quantity = quantity;
        }
        this.calculate();
    }
    calculate() {
        // Initialize itemCount and total to 0
        this.itemCount = 0;
        this.total = 0;
    
        // Loop through each item in the cart
        this.items.forEach(item => {
            // Increment itemCount by the quantity of the current item
            this.itemCount += item.quantity;
    
            // Calculate the subtotal for the current item (quantity * price)
            const subtotal = item.quantity * (item.product?.price || 0);
    
            // Add the subtotal to the total
            this.total += subtotal;
        });
    }
    
    removeItem(id: number) {
        let index = this.items.findIndex(i => i.product.id == id);
        this.items.splice(index, 1);
        this.calculate();
    }
    clear() {
        this.items = [];
        this.itemCount = 0;
        this.total = 0;
    }

}

export class CartItem {
    constructor(
        public product: Product,
        public quantity: number) { }
}
