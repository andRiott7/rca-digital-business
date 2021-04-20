import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

    @Output() any = new EventEmitter()
   // @Output() total = new EventEmitter();

    constructor(
        public shoppingCartService: ShoppingCartService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

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
