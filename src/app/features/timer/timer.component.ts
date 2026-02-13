import { Component, OnInit } from '@angular/core';
import { GameService } from '../../core/services/game.service';
import { GameState } from '../../shared/models/game-state.enum';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor(public gameService: GameService) {}

  ngOnInit() {
    setInterval(() => {
      if (this.gameService.gameState === GameState.Running && this.gameService.timeLeft > 0) {
        this.gameService.timeLeft--;
      }

      if (this.gameService.timeLeft === 0 && this.gameService.gameState === GameState.Running) {
        this.gameService.finishGame();
      }
    }, 1000);
  }

}
