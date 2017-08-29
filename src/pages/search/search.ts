import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchServiceProvider } from "./search.service";
import { SearchModel } from "./search.model";
/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  search: SearchModel = new SearchModel();

  constructor(public navCtrl: NavController, public navParams: NavParams, public searchServiceProvider: SearchServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
    this.getSearch();
  }
  getSearch() {
    this.searchServiceProvider.getSearch().then(data => {
      this.search = data;
      console.log(this.search);
    }, (error) => {
      console.error(error);
    });
  }

}
