import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product-service';
import { Product } from '../product.model';
import { GlobalVariable } from '../global';

@Component({
    selector: 'product-edit',
    templateUrl: './product-edit.component.html'
})
export class ProductEditComponent implements OnInit{
    productId: number;
    product: Product;
    productService: ProductService;   
    baseApiUrl = GlobalVariable.BASE_API_URL;

    constructor(private http: Http, private route: ActivatedRoute, productService: ProductService) {
        this.productService = productService;
    }

    ngOnInit() {
       this.route.queryParams.subscribe(params => {
            this.productId = params['productId'];
        });
       this.http.get(this.baseApiUrl + this.productId).subscribe(result => {
            this.product = result.json();
        });
    }

    editProduct() {
        this.productService.editProduct(this.product, this.productId);
    }
}
