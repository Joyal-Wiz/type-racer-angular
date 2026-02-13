import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Subscription } from 'rxjs';
import { GameState } from '../../shared/models/game-state.enum';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private timerSub!: Subscription;

  private gameStateSubject = new BehaviorSubject<GameState>(GameState.NotStarted);
  gameState$ = this.gameStateSubject.asObservable();

  private timeLeftSubject = new BehaviorSubject<number>(60);
  timeLeft$ = this.timeLeftSubject.asObservable();

  startGame() {
    this.gameStateSubject.next(GameState.Running);
    this.timeLeftSubject.next(60);

    this.timerSub = interval(1000).subscribe(() => {
      const current = this.timeLeftSubject.value - 1;
      this.timeLeftSubject.next(current);

      if (current <= 0) {
        this.finishGame();
      }
    });
  }

  finishGame() {
    this.timerSub?.unsubscribe();
    this.gameStateSubject.next(GameState.Finished);
  }

  resetGame() {
    this.timerSub?.unsubscribe();
    this.timeLeftSubject.next(60);
    this.gameStateSubject.next(GameState.NotStarted);
  }
}