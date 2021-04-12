import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './product.model'
import { ProductService } from './product.service';

@Component({
  selector: 'rca-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    @Input() products: Product[];

  constructor(
      private productService: ProductService,
      private route: ActivatedRoute,
      private router: Router,

  ) { }

  ngOnInit() {
      this.products = this.productService.getProducts();
  }

}
