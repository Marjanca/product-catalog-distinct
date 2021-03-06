import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product-service';
import { Product } from '../product.model';

@Component({
    selector: 'product-details',
    templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit{
    productId: number;
    product: Product;

    constructor(private route: ActivatedRoute, private productService: ProductService) {
    }

    ngOnInit() {
       this.route.queryParams.subscribe(params => {
            this.productId = params['productId'];
        });
        this.productService.getProduct(this.productId).subscribe((result) => {
                this.product = result.json();
            }
        );

    }
}
