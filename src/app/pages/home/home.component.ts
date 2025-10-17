import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../data/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  datafake = dataFake;
  constructor() {}

  ngOnInit(): void {}
}
