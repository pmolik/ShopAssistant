import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service'
import {Product} from "../../interfaces/product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: []
})
export class CartComponent implements OnInit {
  product: Product[] = [];

  constructor(private productService: ProductService){}

  ngOnInit() {
    this.product = this.productService.getProductList();
  }

  log(){
    console.log(JSON.stringify(this.productService.getProductList()))
  }

}
