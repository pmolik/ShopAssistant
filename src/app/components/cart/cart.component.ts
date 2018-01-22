//Komponent wyświetlający dodane przez użytkownika produkty
import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service'
import {Product} from "../../interfaces/product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: []
})
export class CartComponent implements OnInit {
  productList: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productList = this.productService.getProductList();
  }

  deleteProduct(id){
    this.productService.deleteProduct(id)
  }

 /* reduce() {
    var list = [this.productService.getProductList().reduce(function (result, item) {
      result[item.name] = (result[item.name] || []).concat(item);
      return result;
    }, {})
    ];
    return list;
  }*/
}
