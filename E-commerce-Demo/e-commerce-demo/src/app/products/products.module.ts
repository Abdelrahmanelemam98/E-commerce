import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductComponent } from './components/All-product/all-product/all-product.component';
import { ProductListComponent } from './components/product-list/product-list/product-list.component';
import { AppRoutingModule } from '../app-routing.module';
@NgModule({
  declarations: [AllProductComponent, ProductListComponent],
  imports: [CommonModule, AppRoutingModule],
})
export class ProductsModule {}
