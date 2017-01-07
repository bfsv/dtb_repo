import { Component, OnInit } from '@angular/core';
import { Image } from './image';

@Component({
  moduleId: module.id,
  selector: 'dtb-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})

export class HomeComponent implements OnInit {

  images: Image[] = [
    { "title": "Los Angeles", "url": "/w3images/la.jpg" },
    { "title": "New York", "url": "/w3images/ny.jpg" },
    { "title": "Chicago", "url": "/w3images/chicago.jpg" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
