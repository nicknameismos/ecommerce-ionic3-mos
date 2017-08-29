export class ProductModel {
    items: Array<ProductlistModel>;
}

export class ProductlistModel {
    name: string;
    image: string;
    detail: string;
    unitprice: string;
}