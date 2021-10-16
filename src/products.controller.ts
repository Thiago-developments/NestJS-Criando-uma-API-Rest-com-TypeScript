import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('products')
export class ProductsController {
    @Get()
    getAll():string{
        return 'All products list';
    }

    @Get(':id')
    getOne(@Param() params): string {
        return `Return data from product ${params.id}`
    }

    @Post()
    create(@Body() product): string{
        console.log(product);
        return 'Product created';
    }

    @Put()
    update(@Body() product): string{
        console.log(product);
        return 'Product updated';
    }
    @Delete(':id')
    delete(@Param() params):string {
        return `Delete ${params.id}º product`
    }
}