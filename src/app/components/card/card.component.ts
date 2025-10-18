import { Component, Input, OnInit } from '@angular/core';
import { GameService } from 'src/app/service/game.service';
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
  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.setValuesToComponent(this.id);
  }
  setValuesToComponent(id: string) {
    this.gameService.getGames().subscribe((games) => {
      const result = games.find((g: any) => g.id.toString() === id);
      if (result) {
        this.gameCover = result.gameCover;
        this.gameName = result.gameName;
        this.gameLabel = result.gameLabel;
        this.gamePrice = result.gamePrice;
        this.gameType = result.gameType;
        this.gameLink = result.gameLink;
      }
    });
  }
}
