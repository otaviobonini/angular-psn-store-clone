import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrosel',
  templateUrl: './carrosel.component.html',
  styleUrls: ['./carrosel.component.css'],
})
export class CarroselComponent implements OnInit {
  images = [
    'https://psn-store-clone-dio.vercel.app/assets/Banner_1.png',
    'https://psn-store-clone-dio.vercel.app/assets/Banner_2.png',
    'https://psn-store-clone-dio.vercel.app/assets/Banner_3.png',
  ];
  currentIndex = 0;

  constructor() {}

  ngOnInit(): void {}

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
