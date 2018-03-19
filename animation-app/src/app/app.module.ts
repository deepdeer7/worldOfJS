import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AppRoutingModule } from './routing.module';
import { ProductsService } from './products/service/products.service';
import { NewProductComponent } from './products/new-product/new-product.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    NewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule 
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
