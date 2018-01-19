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
  product: Product[] = [];
  product2: Product[] = [];
  agregateList: Object[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.product = this.productService.getProductList();
  }

  reduce() {
    var list = [this.productService.getProductList().reduce(function (result, item) {
      result[item.name] = (result[item.name] || []).concat(item);
      return result;
    }, {})
    ];
    return list;
  }


  log() {
    var quantity = 0;
    var ordinalNumber = 0;

    //console.log('CartList in Json form: ' + JSON.stringify(this.productService.getProductList()))

    this.product2 = this.productService.getProductList().slice(0);
    this.product2.sort((a,b) => a.name.localeCompare(b.name));

    console.log(this.product2);

    for (var i = 0; i<this.product2.length; i++){
      if(i == 0){
        this.agregateList.push(this.product2[i]);
        quantity += this.product2[i]['quantity'];
      }
      else if (this.product2[i]['name'] == this.product2[i-1]['name']) {
        quantity += this.product2[i]['quantity'];
        var newProduct = {
          name: this.product2[i]['name'],
          quantity: quantity
        };
        this.agregateList[ordinalNumber] = newProduct;
        console.log(this.agregateList[ordinalNumber]['quantity']);
      }
      else if (this.product2[i]['name'] != this.product2[i-1]['name']){
        ordinalNumber++;
        quantity = this.product2[i]['quantity'];
        this.agregateList.push(this.product2[i]);
      }

    }
    console.log(this.agregateList);
  }

}
