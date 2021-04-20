import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component'
import { ShoppingCartComponent } from './product/shopping-cart/shopping-cart.component'

const routes: Routes = [
    { path: 'products', component: ProductComponent},
    { path: 'shopping-cart', component:  ShoppingCartComponent},
    { path: '**', redirectTo: 'products' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,
        {
            // scrollPositionRestoration: 'enabled',
            enableTracing: true
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
