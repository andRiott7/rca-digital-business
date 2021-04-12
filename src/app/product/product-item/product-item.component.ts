import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../product/product.model';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['../../product/product.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product

  constructor() { }

  ngOnInit() {
  }

}
