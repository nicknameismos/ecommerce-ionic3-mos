import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ShopModel } from "./shop-list.model";


/*
  Generated class for the ShoplistServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ShoplistServiceProvider {

  constructor(public http: Http) {
    // console.log('Hello ShoplistServiceProvider Provider');
  }
  getData(): Promise<ShopModel> {
    return this.http.get('./assets/example_data/shoplist.json')
      .toPromise()
      .then(resp => resp.json() as ShopModel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
