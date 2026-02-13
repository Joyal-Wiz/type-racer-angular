import { Injectable } from '@angular/core';
import { GameState } from '../../shared/models/game-state.enum';
import { Result } from '../../shared/models/result.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  // -----------------------
  // STATE
  // -----------------------
  gameState: GameState = GameState.NotStarted;

  paragraphs: string[] = [
    'The quick brown fox jumps over the lazy dog.',
    'Consistency beats motivation every single time.',
    'Programming is about thinking not typing fast.',
    'Clean code is more important than clever code.'
  ];

  paragraph: string = '';
  userInput: string = '';

  elapsedSeconds: number = 0;

  // -----------------------
  // GAME FLOW
  // -----------------------
  startGame() {
    const randomIndex = Math.floor(Math.random() * this.paragraphs.length);
    this.paragraph = this.paragraphs[randomIndex];
    this.userInput = '';
    this.elapsedSeconds = 0;
    this.gameState = GameState.Running;
  }

  finishGame() {
    this.gameState = GameState.Finished;
  }

  resetGame() {
    this.gameState = GameState.NotStarted;
    this.paragraph = '';
    this.userInput = '';
    this.elapsedSeconds = 0;
  }

  // -----------------------
  // INPUT HANDLING
  // -----------------------
  updateInput(value: string) {
    if (this.gameState !== GameState.Running) return;
    this.userInput = value;
  }

  updateElapsedSeconds(seconds: number) {
    this.elapsedSeconds = seconds;
  }

  // -----------------------
  // CALCULATIONS
  // -----------------------
  get totalTyped(): number {
    return this.userInput.length;
  }

  get correctChars(): number {
    let count = 0;
    for (let i = 0; i < this.userInput.length; i++) {
      if (this.userInput[i] === this.paragraph[i]) {
        count++;
      }
    }
    return count;
  }

  get wpm(): number {
    if (this.elapsedSeconds === 0) return 0;
    const minutes = this.elapsedSeconds / 60;
    return Math.round((this.totalTyped / 5) / minutes);
  }

  get accuracy(): number {
    if (this.totalTyped === 0) return 0;
    return Math.round((this.correctChars / this.totalTyped) * 100);
  }

  getResult(): Result {
    return {
      wpm: this.wpm,
      accuracy: this.accuracy,
      correctChars: this.correctChars,
      totalTyped: this.totalTyped
    };
  }

  // -----------------------
  // HIGHLIGHT LOGIC
  // -----------------------
  getCharClass(index: number): string {
    if (!this.userInput[index]) return '';

    return this.userInput[index] === this.paragraph[index]
      ? 'correct'
      : 'wrong';
  }
}
