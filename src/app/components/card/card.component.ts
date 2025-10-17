import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from '../../data/data';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input()
  id: string = '';
  @Input()
  gameCover: string = '';
  @Input()
  gameLabel: string = '';
  @Input()
  gameName: string = '';
  @Input()
  gameType: string = '';
  @Input()
  gamePrice: string = '';
  @Input()
  gameLink: string = '';
  constructor() {}

  ngOnInit(): void {
    this.setValuesToComponent(this.id);
  }
  setValuesToComponent(id: string) {
    const result = dataFake.find((article) => article.id.toString() === id);

    if (result) {
      this.gameCover = result.gameCover;
      this.gameName = result.gameName;
      this.gameLabel = result.gameLabel;
      this.gamePrice = result.gamePrice;
      this.gameType = result.gameType;
      this.gameLink = result.gameLink;
    }
  }
}
