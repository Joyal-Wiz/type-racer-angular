import { Component } from '@angular/core';
import { TypingComponent } from './features/typing/typing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TypingComponent],
  template: `<app-typing></app-typing>`
})
export class AppComponent {}
