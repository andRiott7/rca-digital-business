import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

    @Output() any = new EventEmitter()
    // @Output() getValue = new EventEmitter();

    getValue!: Observable<any>

    constructor(
        public shoppingCartService: ShoppingCartService,
        private productService: ProductService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.getValue = this.productService
            .getCartItems(this.route.parent?.snapshot.params['id'])
    }

    items(): any[] {
        return this.shoppingCartService.items
    }

    removeItem(item: any) {
        this.shoppingCartService.removeItem(item)
    }

    addItem(item: any) {
        this.shoppingCartService.addItem(item)
    }

    increaseQty(item: any) {
        this.shoppingCartService.increaseQty(item)
    }

    decreaseQty(item: any) {
        this.shoppingCartService.decreaseQty(item)
    }

    total(): number {
        return this.shoppingCartService.total()
    }
}
