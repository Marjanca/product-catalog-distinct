import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { GlobalVariable } from './global';

@Injectable()
export class ProductService {

    private baseApiUrl = GlobalVariable.BASE_API_URL;
    
    constructor(private http: Http, private route: ActivatedRoute, private location: Location) {
    }
    
    getProducts(): Observable<any> {
        return this.http.get(this.baseApiUrl);
    }

    getProduct(productId: number): any {
        return this.http.get(this.baseApiUrl + productId);
    }

    addProduct(product: any) {
        console.log("adding product...");
        let body = JSON.stringify(product);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers }); 
        this.http.post(this.baseApiUrl, body, options).subscribe(() => {
            this.location.back();
        });
    }

    editProduct(product: any, productId: number) {
        let body = JSON.stringify(product);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers }); 
        this.http.put(this.baseApiUrl + productId, body, options).subscribe(() => {
            this.location.back();
        });
    }

    deleteProduct(productId: number): any {
        return this.http.delete(this.baseApiUrl + productId);
    }
}