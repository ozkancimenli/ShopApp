import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";

@Injectable()
export class Order {
  public id: number | null = null;
  public name: string | null = null;
  public address: string | null = null;
  public city: string | null = null;
  public phone: string | null = null;
  public email: string | null = null;
  public isSent: boolean = false;

  constructor(public cart: Cart) {}

  clearOrder() {
    this.id = null;
    this.name = null;
    this.address = null;
    this.city = null;
    this.phone = null;
    this.email = null;
    this.isSent = false;
    this.cart.clear();
  }
}
