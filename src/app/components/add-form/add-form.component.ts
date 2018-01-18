import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service'
import {Product} from "../../interfaces/product";

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  newProduct = {
    name:'',
    quantity: null
  };

  constructor(private productService: ProductService) { }

  addProduct(){
    this.productService.addProduct(this.newProduct);
  }

  ngOnInit() {
  }

}
