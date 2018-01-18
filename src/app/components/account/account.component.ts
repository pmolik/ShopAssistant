import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service'
import {Product} from "../../interfaces/product";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  accountList: Product[] = [];
  productListCopy: Product[] = [];
  sortedList: Product[] = [];
  j = 0;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    //this.product = this.productService.getProductList();
  }

  copyList() {
    this.productListCopy = this.productService.getProductList();
    //this.accountList[0] = this.productListCopy[0];

    }

  //this.productList = this.productService.getProductList();

}
