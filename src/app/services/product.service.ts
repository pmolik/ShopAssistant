//Plik zawiera opercaje na obiekcie typu product
import {Injectable} from '@angular/core';
import {Product} from "../interfaces/product";

@Injectable()
export class ProductService {

  ProductList: Array <Product> = [
    {id: 0, name: 'Pomidor', quantity: 2},
    {id: 1, name: 'Brokuł', quantity: 3},
    {id: 2, name: 'Marchewka', quantity: 1}];


  constructor() {
  }

  /*getAllProducts() : Product[] {
   return [
   {name: 'Pomidor', quantity: 2},
   {name: 'Brokuł', quantity: 3},
   {name: 'Marchewka', quantity: 1}
   ];
   }*/

  getProductList() {
    return this.ProductList;
  }

  addProduct(product) {
    this.ProductList.push(product);
  }

  deleteProduct(id) {
    for (var i = 0; i < this.ProductList.length; i++) {
      if (this.ProductList[i]['id'] == id) {
        this.ProductList.splice(i, 1);
      }
    }
    console.log(id);
  }

}
