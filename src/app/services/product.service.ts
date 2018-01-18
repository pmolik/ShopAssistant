import { Injectable } from '@angular/core';
import {Product} from "../interfaces/product";

@Injectable()
export class ProductService {

  ProductList: Array <Product> = [
    {name: 'Pomidor', quantity: 2},
    {name: 'Brokuł', quantity: 3},
    {name: 'Marchewka', quantity: 1}];


  constructor() { }

  /*getAllProducts() : Product[] {
   return [
   {name: 'Pomidor', quantity: 2},
   {name: 'Brokuł', quantity: 3},
   {name: 'Marchewka', quantity: 1}
   ];
   }*/

  getProductList(){
    return this.ProductList;
  }

  addProduct(product){
    this.ProductList.push(product);
  }

}
