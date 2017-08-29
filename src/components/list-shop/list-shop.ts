import { Component, Input, EventEmitter, Output } from '@angular/core';

/**
 * Generated class for the ListShopComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'list-shop',
  templateUrl: 'list-shop.html'
})
export class ListShopComponent {
  @Input() items: any;
  @Output() itemClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    console.log('Hello ListShopComponent Component');
  }
  onClick(item) {
    this.itemClicked.emit(item);
  }
}
