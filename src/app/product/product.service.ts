import { Injectable } from '@angular/core';
import { Product } from './product-item/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
 })

export class ProductService {

    products: Product[] = [
        {
            id: 1,
            title: 'TLOU2',
            category: 'PS4',
            price: 199,
            imagePath: '../../assets/img/product_01.png'
        },
        {
            id: 2,
            title: 'Cyberpunk',
            category: 'PS4, PC, XBOX',
            price: 200,
            imagePath: '../../assets/img/product_02.png'
        },
        {
            id: 3,
            title: 'Days Gone',
            category: 'PS4',
            price: 127,
            imagePath: '../../assets/img/product_03.png'
        },
        {
            id: 4,
            title: 'God of War',
            category: 'PS4',
            price: 60,
            imagePath: '../../assets/img/product_04.png'
        },
        {
            id: 5,
            title: 'Until Down',
            category: 'PS4',
            price: 170,
            imagePath: '../../assets/img/product_05.png'
        },
        {
            id: 6,
            title: 'Horizon',
            category: 'PS4, PC',
            price: 199,
            imagePath: '../../assets/img/product_06.png'
        },
        {
            id: 7,
            title: 'Apex',
            category: 'PS4, XBOX, Nintendo, PC',
            price: 179,
            imagePath: '../../assets/img/product_07.png'
        },
        {
            id: 8,
            title: 'Tony Hawks',
            category: 'PS4',
            price: 75,
            imagePath: '../../assets/img/product_08.png'
        },
        {
            id: 9,
            title: 'Outriders',
            category: 'PS4',
            price: 99,
            imagePath: '../../assets/img/product_09.png'
        },
        {
            id: 10,
            title: 'Final Fantasy',
            category: 'PS4',
            price: 199,
            imagePath: '../../assets/img/product_10.png'
        },
        {
            id: 11,
            title: 'GTA V',
            category: 'PS4, PS3, XBOX',
            price: 114,
            imagePath: '../../assets/img/product_11.png'
        }

    ]
    constructor( private http: HttpClient) { }

    getProducts(): Product[] {
        return this.products;
    }

}
