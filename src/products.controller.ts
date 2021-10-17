import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Product } from "./product.model";

@Controller('products')
export class ProductsController {
    products: Product[] = [
        new Product("BOOK01", "BDD AND TDD Book on practice", 29.90),
        new Product("BOOK02", "Flutter for beginners", 39.90),
        new Product("BOOK03", "IA as a service ", 19.90),
    ];
    @Get()
    getAll():Product[]{
        return this.products;
    }

    @Get(':id')
    getOne(@Param() params): Product {
        return this.products[0];
    }

    @Post()
    create(@Body() product : Product) {
       product.id = 100;
        this.products.push(product);
    }

    @Put()
    update(@Body() product: Product): Product{
        return product;
    }
    @Delete(':id')
    delete(@Param() params) {
        this.products.pop();
    }
}