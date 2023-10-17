import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/share/models/product';
import { ProductServiceService } from 'src/app/share/services/product-service.service';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.css'],
})
export class ProductSectionComponent {
  product: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceService,
    private router: Router
  ) {
    this.product = [
      {
        id: 4,
        name: 'Simple Blacl Clock',
        price: 11,
        img: '../../../../../assets/image/4.webp',
      },
      {
        id: 5,
        name: 'Simple Blacl Clock',
        price: 111,
        img: '../../../../../assets/image/1.webp',
      },
      {
        id: 6,
        name: 'Simple Blacl Clock',
        price: 111,
        img: '../../../../../assets/image/6.webp',
      },
    ];
  }
}
