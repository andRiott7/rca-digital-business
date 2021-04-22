import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';
import { BaseService } from '../../app/shared/base.service';
import { RCA_API } from '../app.api';
import { Product } from './product-item/product.model';


@Injectable()

export class ProductService extends BaseService {

    constructor( private http: HttpClient) {
        super()
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${RCA_API}/products`)
        .pipe(catchError(this.handleError));
    }

    getCartItems(id: string): Observable<any>{
        return this.http.get(`${RCA_API}/shopping-cart`)
        .pipe(catchError(this.handleError));
      }

}
