import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component'
import { ShoppingCartComponent } from './product/shopping-cart/shopping-cart.component'

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'product', redirectTo: 'ProductComponent'},
            { path: 'shopping-cart', redirectTo: 'ShoppingCartComponent'}
        ]
    },
    // { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,
        {
            scrollPositionRestoration: 'enabled',
            enableTracing: true
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
