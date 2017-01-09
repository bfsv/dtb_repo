import { Component, OnInit } from '@angular/core';
import { Image } from './image';

@Component({
  moduleId: module.id,
  selector: 'dtb-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css'],
})

export class ProductsComponent implements OnInit {

  images: Image[] = [
    { "title": "Dans ton bocal", "url": "/images/Logo_Long.png" },
    { "title": "3 bocaux", "url": "/images/bocaux1.png" },
    { "title": "2 bocaux, 1 bouteille", "url": "/images/bocaux2.jpg" },
    { "title": "Maison", "url": "/images/maison.jpg" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
