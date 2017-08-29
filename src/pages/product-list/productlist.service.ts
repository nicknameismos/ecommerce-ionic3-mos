import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ProductModel } from "./product-list.model";


/*
  Generated class for the ProductlistServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProductlistServiceProvider {

  constructor(public http: Http) {
    console.log('Hello ProductlistServiceProvider Provider');
  }
  getData(): Promise<ProductModel> {
    return this.http.get('./assets/example_data/productlist.json')
     .toPromise()
     .then(response => response.json() as ProductModel)
     .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
