import { Component } from '@angular/core';
feature/game-logic
import { CommonModule } from '@angular/common';
import { GameService } from '../../core/services/game.service';

@Component({
  selector: 'app-typing',
  standalone: true,
  imports: [CommonModule],


main
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.css']
})
export class TypingComponent {

feature/game-logic
  constructor(public gameService: GameService) {}

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.gameService.updateInput(input.value);
  }

 
}
