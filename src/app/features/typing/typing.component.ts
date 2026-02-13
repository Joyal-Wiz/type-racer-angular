import { Component } from '@angular/core';
import { GameService } from '../../core/services/game.service';
import { GameState } from '../../shared/models/game-state.enum';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.css']
})
export class TypingComponent {

  public GameState = GameState;

  paragraphs: string[] = [
    "The quick brown fox jumps over the lazy dog.",
    "Programming is about solving problems creatively.",
    "Consistency beats motivation every single time."
  ];

  constructor(public gameService: GameService) {}

  startGame() {
    const randomIndex = Math.floor(Math.random() * this.paragraphs.length);
    const randomParagraph = this.paragraphs[randomIndex];

    this.gameService.startGame(randomParagraph);
  }

  onTyping() {
    if (this.gameService.userInput.length === 1) {
      this.gameService.beginTyping();
    }
  }

  endGame() {
    this.gameService.finishGame();
  }

}
