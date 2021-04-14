import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './product-item/product.model'
import { ProductService } from './product.service';
import { CartItem } from './shopping-cart/cart-item.model';

@Component({
  selector: 'rca-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products!: Product[];

  // @Input() item!: CartItem;

  constructor(
      private productService: ProductService,
      private route: ActivatedRoute,
      private router: Router

  ) { }

  ngOnInit() {
      this.products = this.productService.getProducts();
  }

  addProductItem(product: Product) {
    console.log(product)
  }
}
