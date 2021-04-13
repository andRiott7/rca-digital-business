import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['../../product/product.component.scss']
})

export class ProductItemComponent implements OnInit {

  @Input() product!: Product
  @Output() add = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent() {
      this.add.emit(this.product);
  }
}
