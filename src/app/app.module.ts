import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product/product.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductItemComponent } from './product/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [
      ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
