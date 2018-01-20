import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service'
import {Product} from "../../interfaces/product";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  product: Product[] = [];
  agregateList: Object[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
  }

  copyList() {
    this.agregateList = [];

    var quantity = 0;
    var ordinalNumber = 0;

    this.product = this.productService.getProductList().slice(0);
    this.product.sort((a, b) => a.name.localeCompare(b.name));

    //console.log(this.product);

    for (var i = 0; i < this.product.length; i++) {
      if (i == 0) {
        this.agregateList.push(this.product[i]);
        quantity += this.product[i]['quantity'];
      }
      else if (this.product[i]['name'] == this.product[i - 1]['name']) {
        quantity += this.product[i]['quantity'];
        var newProduct = {
          name: this.product[i]['name'],
          quantity: quantity
        };
        this.agregateList[ordinalNumber] = newProduct;
        console.log(this.agregateList[ordinalNumber]['quantity']);
      }
      else if (this.product[i]['name'] != this.product[i - 1]['name']) {
        ordinalNumber++;
        quantity = this.product[i]['quantity'];
        this.agregateList.push(this.product[i]);
      }

    }
    console.log(this.agregateList);
  }


}
