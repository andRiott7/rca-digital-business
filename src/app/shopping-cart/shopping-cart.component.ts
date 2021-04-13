import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
    selector: 'shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

    constructor(private shoppingCartService: ShoppingCartService) { }

    ngOnInit() {
    }

    items(): any[] {
        return this.shoppingCartService.items;
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
