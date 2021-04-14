import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from './product.model';
import { CartItem } from '../shopping-cart/cart-item.model';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['../../product/product.component.scss']
})

export class ProductItemComponent implements OnInit {

  @Input() product!: Product

  @Output() add = new EventEmitter()
  @Output() increaseQty = new EventEmitter<CartItem>()
  @Output() decreaseQty = new EventEmitter<CartItem>()
  @Output() remove = new EventEmitter<CartItem>()

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent() {
      this.add.emit(this.product);
  }
  emitIncreaseQty(item: CartItem){
    this.increaseQty.emit(item)
  }

  emitDecreaseQty(item: CartItem){
    this.decreaseQty.emit(item)
  }

  emitRemove(item: CartItem){
    this.remove.emit(item)
  }

}
