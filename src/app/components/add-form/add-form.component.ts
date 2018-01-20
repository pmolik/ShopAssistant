import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service'

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  name = '';
  quantity= 0;

  constructor(private productService: ProductService) { }

  addProduct(){
    var newProduct = {
      name: this.name,
      quantity: this.quantity
    };
    this.productService.addProduct(newProduct);

    this.name = '';
    this.quantity = 0;
  }

  ngOnInit() {
  }

}
