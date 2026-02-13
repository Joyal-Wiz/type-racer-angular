import { Component, OnInit } from '@angular/core';
import { GameService } from '../../core/services/game.service';
import { GameState } from '../../shared/models/game-state.enum';
import { Result } from '../../shared/models/result.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  public GameState = GameState;

  username: string = '';
  leaderboard: Result[] = [];

  constructor(public gameService: GameService) {}

  ngOnInit() {
    this.loadLeaderboard();
  }

  saveScore() {

    if (!this.username) return;

    const newResult: Result = {
      username: this.username,
      wpm: this.gameService.wpm,
      accuracy: this.gameService.accuracy,
      date: new Date().toLocaleString()
    };

    this.leaderboard.push(newResult);
    this.leaderboard.sort((a, b) => b.wpm - a.wpm);

    localStorage.setItem('leaderboard', JSON.stringify(this.leaderboard));

    this.username = '';
  }

  loadLeaderboard() {
    const stored = localStorage.getItem('leaderboard');
    this.leaderboard = stored ? JSON.parse(stored) : [];
  }

  restartGame() {
    this.gameService.paragraph = '';
    this.gameService.userInput = '';
    this.gameService.timeLeft = 60;
    this.gameService.wpm = 0;
    this.gameService.accuracy = 0;
    this.gameService.gameState = GameState.NotStarted;
  }

}
