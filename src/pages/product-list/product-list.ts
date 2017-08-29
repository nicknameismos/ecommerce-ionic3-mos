import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductlistServiceProvider } from "./productlist.service";
import { ProductModel } from "./product-list.model";

/**
 * Generated class for the ProductListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {
  productlist: ProductModel = new ProductModel();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public productlistServiceProvider: ProductlistServiceProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductListPage');
    this.getProductlist();
  }

  getProductlist() {
    this.productlistServiceProvider.getData().then(data => {
      this.productlist = data;
    }, (error) => {
      console.error(error);
    });
  }
}
