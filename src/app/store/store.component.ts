import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
@Component({
  // no css
  selector: "store",
  templateUrl: "store.component.html",
})
export class StoreComponent {
  constructor(private repository: ProductRepository) {} // repository is injected
  get products(): Product[] {
    return this.repository.getProducts();
  }
  get categories(): string[] {
    return this.repository.getCategories();
  }
}
