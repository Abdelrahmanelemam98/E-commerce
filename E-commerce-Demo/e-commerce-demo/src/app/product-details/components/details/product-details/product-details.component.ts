import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/share/models/product';
import { ProductServiceService } from 'src/app/share/services/product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  details: any[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private productService: ProductServiceService
  ) {
    this.details = [
      {
        id: 6,
        name: 'Simple Blacl Clock',
        price: 111,
        img: '../../../../../assets/image/6.webp',
      },
    ];
  }
}
