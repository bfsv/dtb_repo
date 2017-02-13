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

  categories: String[];
  products: Product[];
  searchedCategories: String[] = [];

  constructor(
    private productService: ProductService,
    private router: Router) { }

  getProductsCategories(): void {
    this.productService
      .getProductsCategories()
      .subscribe((data: String[]) => this.categories = data,
      error => console.log(error),
      () => console.log('Get all products categories complete'));
  }

  getProducts(): void {
    this.productService
      .getProducts()
      .subscribe((data: Product[]) => this.products = data,
      error => console.log(error),
      () => console.log('Get all Products complete'));
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    if (this.searchedCategories.indexOf(term) != -1) {
      this.searchedCategories.splice(this.searchedCategories.indexOf(term),1);
    } else {
      this.searchedCategories.push(term);
    }
    console.log('Searched Products : ' + this.searchedCategories);
    this.productService.search(this.searchedCategories).subscribe((data: Product[]) => this.products = data,
      error => console.log(error),
      () => console.log('Search complete'));
  }

  ngOnInit(): void {
    this.getProductsCategories();
    this.getProducts();
  }

}
