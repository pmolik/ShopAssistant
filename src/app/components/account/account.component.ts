//Komponent wyświetlający zaagregowane produkty, które wcześniej zostały dodane przez użytkownika
import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service'
import {Product} from "../../interfaces/product";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  productList: Product[] = [];
  agregateList: Object[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
  }

  agregateProductList() { //Funkcja która sumuje ilość produktów o takiej samej nazwie i wyświtla ją w agregateList
    this.agregateList = [];

    var quantity = 0; //zmienna reprezentująca sumę produktów o takiej samej nazwie
    var ordinalNumber = 0;// zmienna reprezentująca pozycję w agregateList

    this.productList = this.productService.getProductList().slice(0);
    this.productList.sort((a, b) => a.name.localeCompare(b.name));

    //console.log(this.product);

    for (var i = 0; i < this.productList.length; i++) {
      if (i == 0) {
        this.agregateList.push(this.productList[i]);
        quantity += this.productList[i]['quantity'];
      }
      else if (this.productList[i]['name'] == this.productList[i - 1]['name']) {
        quantity += this.productList[i]['quantity'];
        var newProduct = {
          id: ordinalNumber,
          name: this.productList[i]['name'],
          quantity: quantity
        };
        this.agregateList[ordinalNumber] = newProduct;
        console.log(this.agregateList[ordinalNumber]['quantity']);
      }
      else if (this.productList[i]['name'] != this.productList[i - 1]['name']) {
        ordinalNumber++;
        quantity = this.productList[i]['quantity'];
        this.agregateList.push(this.productList[i]);
      }

    }
    console.log(this.agregateList);

  }

  openAlert() { //Funkcja wyświetlająca zaagregowaną listę w formacie JSON
    window.alert('JSON agregateList' + ': ' + JSON.stringify(this.agregateList));//Wyświetlanie zaagregowanej listy produktów w formacie JSON
    console.log(this.agregateList);//Wyświtlenie zaagregowanej listy produktów w konsoli
  }


}
