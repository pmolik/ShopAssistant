//Komponent zawierjący funkcje sortowania oraz przyciski do wykonania tych akcji
import { Component, OnInit, Input } from '@angular/core';
import {Product} from "../../interfaces/product";

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  @Input() product: Product[] = [];

  constructor() { }

  ngOnInit() {
  }

  alphabetically(){
    this.product.sort((a, b) => a.name.localeCompare(b.name));
  }

  reverseAlphabetically(){
    this.product.sort((a,b) => a.name.localeCompare(b.name)).reverse();
  }

  quantity(){
    this.product.sort((a,b) => a.quantity - b.quantity);
  }

  reverseQuantity(){
    this.product.sort((a,b) => a.quantity - b.quantity).reverse();
  }

}
