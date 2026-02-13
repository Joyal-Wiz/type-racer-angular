import { Component } from '@angular/core';
import { GameService } from 'src/app/core/services/game.service';
import { GameState } from '../../shared/models/game-state.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timer.component.html'
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
