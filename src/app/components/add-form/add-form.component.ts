//Komponent służący do dodawnia nowych produktów
import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service'

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  name = '';
  quantity = 1;
  nameError = false;
  quantityError = false;

  constructor(private productService: ProductService) {
  }

  addProduct() {
    if (this.name == '') {
      this.nameError = true;
    }
    else if (this.quantity <= 0) {
      this.quantityError = true;
    }
    else if (this.name == '' && this.quantity <= 0) {
      this.nameError = true;
      this.quantityError = true;
    }

    else {
      var newProduct = {
        id: this.productService.getProductList().length - 1,
        name: this.name,
        quantity: this.quantity
      };

      this.productService.addProduct(newProduct);

      this.name = '';
      this.quantity = 0;

      this.nameError = false;
      this.quantityError = false;
    }

  }

  ngOnInit() {
  }

}
