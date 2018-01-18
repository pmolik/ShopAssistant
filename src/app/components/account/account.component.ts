import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service'
import {Product} from "../../interfaces/product";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  product: Product[] = [];

  constructor(private productService: ProductService){}

  ngOnInit() {
    this.product = this.productService.getProductList();
  }

}
