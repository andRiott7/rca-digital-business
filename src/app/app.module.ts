import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product/product.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { ShoppingCartComponent } from './product/shopping-cart/shopping-cart.component';
import { ShoppingCartService } from './product/shopping-cart/shopping-cart.service';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { LocalStorageService } from './login/local-storage.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ProductComponent,
        ProductItemComponent,
        ShoppingCartComponent,
        LoginComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        RouterModule
    ],
    providers: [
        ProductService,
        ShoppingCartService,
        LocalStorageService,
        {
            provide: LOCALE_ID,
            useValue: 'en-US'
        },
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
