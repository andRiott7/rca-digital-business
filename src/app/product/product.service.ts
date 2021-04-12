import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()

export class ProductService {
    products: Product[] = [
        {
            id: 1,
            title: 'TLOU2',
            category: 'PS4',
            price: '199',
            imagePath: '../../assets/img/product_01.png'
        },
        {
            id: 2,
            title: 'Cyberpunk',
            category: 'PS4, PC, XBOX',
            price: '200',
            imagePath: '../../assets/img/product_02.png'
        },
        {
            id: 3,
            title: 'Days Gone',
            category: 'PS4',
            price: '127',
            imagePath: '../../assets/img/product_03.png'
        },
        {
            id: 4,
            title: 'God of War',
            category: 'PS4',
            price: '60',
            imagePath: '../../assets/img/product_04.png'
        }
    ]
    constructor() { }

    getProducts(): Product[] {
        return this.products;
    }
}
