import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from './product-item/product.model'
import { ProductService } from './product.service';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service'
import { CartItem } from './shopping-cart/cart-item.model';

@Component({
    selector: 'rca-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    toggleCart: boolean = false;

    cartAmount: number = 0;

    products!: Product[];

    item!: Observable<CartItem[]>;

    // @Input() item!: CartItem;

    constructor(
        public shoppingCartService: ShoppingCartService,
        private productService: ProductService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.getProducts()
    }

    getProducts() {
        this.productService.getProducts()
            .subscribe( result => this.products = result )
    }


    addProductItem() {
        return this.cartAmount
    }
}
