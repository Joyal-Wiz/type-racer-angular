import { Injectable } from '@angular/core';
import { GameState } from '../../shared/models/game-state.enum';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  paragraph: string = '';
  userInput: string = '';
  timeLeft: number = 60;

  wpm: number = 0;
  accuracy: number = 0;

  gameState: GameState = GameState.NotStarted;

  startGame(paragraph: string) {
    this.paragraph = paragraph;
    this.userInput = '';
    this.timeLeft = 60;
    this.gameState = GameState.NotStarted; // important
  }

  beginTyping() {
    if (this.gameState === GameState.NotStarted) {
      this.gameState = GameState.Running;
    }
  }

 finishGame() {

  const totalTyped = this.userInput.length;
  const correctChars = this.calculateCorrectCharacters();

  const timeSpent = 60 - this.timeLeft;
  const minutes = timeSpent / 60;

  this.wpm = minutes > 0 ? Math.round((totalTyped / 5) / minutes) : 0;
  this.accuracy = totalTyped > 0 ? Math.round((correctChars / totalTyped) * 100) : 0;

  this.gameState = GameState.Finished;
}
calculateCorrectCharacters(): number {
  let correct = 0;

  for (let i = 0; i < this.userInput.length; i++) {
    if (this.userInput[i] === this.paragraph[i]) {
      correct++;
    }
  }

  return correct;
}


}
  