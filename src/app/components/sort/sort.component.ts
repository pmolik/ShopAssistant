//Komponent zawierjący funkcje sortowania oraz przyciski do wykonania tych akcji
import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service'
import {Product} from "../../interfaces/product";

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  product: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  alphabetically(){
    this.product = this.productService.getProductList();
    this.product.sort((a, b) => a.name.localeCompare(b.name));
  }

  reverseAlphabetically(){
    this.product = this.productService.getProductList();
    this.product.sort((a,b) => a.name.localeCompare(b.name)).reverse();
  }

  quantity(){
    this.product = this.productService.getProductList();
    this.product.sort((a,b) => a.quantity - b.quantity);
  }

  reverseQuantity(){
    this.product = this.productService.getProductList();
    this.product.sort((a,b) => a.quantity - b.quantity).reverse();
  }

}
