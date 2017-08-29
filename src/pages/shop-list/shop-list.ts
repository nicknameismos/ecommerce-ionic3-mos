import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoplistServiceProvider } from "./shoplist.service";
import { ShopModel } from "./shop-list.model";
import { ShopDetailPage } from "../shop-detail/shop-detail";

/**
 * Generated class for the ShopListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-shop-list',
  templateUrl: 'shop-list.html',
})
export class ShopListPage {
  shoplist: ShopModel = new ShopModel();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public shoplistServiceProvider: ShoplistServiceProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopListPage');
    this.getShoplist();
  }

  getShoplist() {
    this.shoplistServiceProvider.getData().then(data => {
      this.shoplist = data;
    }, (error) => {
      console.error(error);
    });
  }
}
