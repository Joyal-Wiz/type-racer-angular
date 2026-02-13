import { Component } from '@angular/core';
import { GameService } from 'src/app/core/services/game.service';
import { GameState } from '../../shared/models/game-state.enum';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  gameState$ = this.gameService.gameState$;
  timeLeft$ = this.gameService.timeLeft$;

  GameState = GameState;

  constructor(private gameService: GameService) {}

  start() {
    this.gameService.startGame();
  }

  reset() {
    this.gameService.resetGame();
  }
}
