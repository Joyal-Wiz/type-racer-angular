import { Component } from '@angular/core';
import { TimerComponent } from './features/timer/timer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TimerComponent],
  template: `<app-timer></app-timer>`
})
export class AppComponent {}
