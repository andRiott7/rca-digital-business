import { Injectable } from '@angular/core';
import { Product } from '../product/product-item/product.model';
import { CartItem } from './cart-item.model';


@Injectable()
export class ShoppingCartService {
    items: CartItem[] = []

    constructor() { }

    clear() {
        this.items = []
    }

    addItem(item:Product) {
        let foundItem = this.items.find((pItem)=> pItem.product.id === item.id)
        if(foundItem){
          this.increaseQty(foundItem)
        }else{
          this.items.push(new CartItem(item))
        }
    }

    increaseQty(item: CartItem) {
        item.quantity = item.quantity + 1
    }

    decreaseQty(item: CartItem) {
        item.quantity = item.quantity - 1
        if (item.quantity === 0) {
            this.removeItem(item)
        }
    }

    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1)
    }

    total(): number {
        return this.items
            .map(item => item.value())
            .reduce((prev, value) => prev + value, 0)
    }
}
