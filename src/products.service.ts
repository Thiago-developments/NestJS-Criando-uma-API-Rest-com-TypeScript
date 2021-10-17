import { Injectable } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductsService {
    products: Product[] = [
        // new Product("BOOK01", "BDD AND TDD Book on practice", 29.90),
        // new Product("BOOK02", "Flutter for beginners", 39.90),
        // new Product("BOOK03", "IA as a service ", 19.90),
    ];

    getAll(): Product[] {
        return this.products;
    }

    getById(id: number): Product {
        return this.products[0];
    }

    create(product: Product){
        this.products.push(product);
    }

    update(product: Product): Product{
        return product;
    }

    delete(id: number) {
        this.products.pop();
    }

}