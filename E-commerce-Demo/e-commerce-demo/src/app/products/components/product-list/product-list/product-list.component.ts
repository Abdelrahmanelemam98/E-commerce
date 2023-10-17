import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/share/models/product';
import { ProductServiceService } from 'src/app/share/services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  AllProducts: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceService,
    private router: Router
  ) {
    this.AllProducts = [
      {
        id: 1,
        name: 'Simple Blacl Clock',
        price: 112,
        img: '../../../../../assets/image/1.webp',
      },
      {
        id: 2,
        name: 'Simple Blacl Clock',
        price: 12,
        img: '../../../../../assets/image/2.webp',
      },
      {
        id: 3,
        name: 'Simple Blacl Clock',
        price: 10,
        img: '../../../../../assets/image/3.webp',
      },
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
        img: '../../../../../assets/image/3.webp',
      },
      {
        id: 6,
        name: 'Simple Blacl Clock',
        price: 112,
        img: '../../../../../assets/image/6.webp',
      },
    ];
  }
  // ngOnInit(): void {
  //   this.getAllProduct();
  // }

  // getAllProduct() {
  //   this.productService.getAllProduct().subscribe((data) => {
  //     this.AllProducts = data;
  //   });
  // }
  // getById(id: number) {
  //   this.router.navigate(['details/' + id]);
  // }
}
