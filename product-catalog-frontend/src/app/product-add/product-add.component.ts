import { Component, OnInit} from '@angular/core';
import { ProductService } from '../product-service';
import { Product } from '../product.model';

@Component({
    selector: 'product-add',
    templateUrl: './product-add.component.html'
})
export class ProductAddComponent implements OnInit{
    productId: number;
    product: Product;
    productService: ProductService;

    constructor(productService: ProductService) {
        this.productService = productService;
    }

    ngOnInit() {
        this.product = new Product();
    }

    addProduct() {
        this.productService.addProduct(this.product);
    }
 
}
