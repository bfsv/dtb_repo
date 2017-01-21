import { Component, OnInit } from '@angular/core';
import { Image } from './image';
import { Router } from '@angular/router';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  moduleId: module.id,
  selector: 'dtb-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css'],
})

export class ProductsComponent implements OnInit {

  categories: string[] = [
    "Sec","Liquide","Cosmétique","Entretien","Farines","Pâtes", "Céréales"
  ];

  products: Product[];
  constructor(
    private productService: ProductService,
    private router: Router) { }
  getProducts(): void {
    this.productService
      .getProducts()
      .subscribe((data: Product[]) => this.products = data,
      error => console.log(error),
      () => console.log('Get all Products complete'));
  }

  ngOnInit(): void {
    this.getProducts();
  }

}
