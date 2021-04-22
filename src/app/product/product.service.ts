import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';
import { BaseService } from '../../app/shared/base.service';
import { RCA_API } from '../app.api';
import { Product } from './product-item/product.model';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service';
import { CartItem } from './shopping-cart/cart-item.model';


@Injectable()

export class ProductService extends BaseService {

    constructor(
        private http: HttpClient,
        private cartService: ShoppingCartService
    ) {
        super()
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${RCA_API}/products`)
            .pipe(catchError(this.handleError));
    }

    getCartItems(id: string): Observable<any> {
        return this.http.get(`${RCA_API}/shopping-cart`)
            .pipe(catchError(this.handleError));
    }

    cartItems(): CartItem[] {
        return this.cartService.items
    }
    increaseQty(item: CartItem) {
        this.cartService.increaseQty(item)
    }

    decreaseQty(item: CartItem) {
        this.cartService.decreaseQty(item)
    }
}
