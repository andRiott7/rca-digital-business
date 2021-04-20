import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from './product.model';
import { CartItem } from '../shopping-cart/cart-item.model';

@Component({
    selector: 'product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['../../product/product.component.scss']
})

export class ProductItemComponent implements OnInit {

    public isSelected: boolean = false
    public buttonName: string = 'Add to Cart'

    @Input() product?: Product

    @Output() add = new EventEmitter()
    @Output() remove = new EventEmitter()

    constructor() { }

    ngOnInit() {
    }

      emitAddEvent() {
          this.add.emit(this.product);
          this.isSelected = !this.isSelected;
          // Toggle button name
          if(this.isSelected){
            this.remove.emit(this.product)
            this.buttonName = "Remove from Cart";
          }
          else
            this.buttonName = "Add to Cart"
      }

    // emitAddEvent() {
    //     this.add.emit(this.product);
    //     this.isSelected = !this.isSelected;
    //     this.buttonName = "Add to Cart"
    // }

    // emitRemoveEvent() {
    //     this.remove.emit(this.product);
    //     !this.isSelected == this.isSelected;
    //     this.buttonName = "Remove from Cart";
    // }
}
