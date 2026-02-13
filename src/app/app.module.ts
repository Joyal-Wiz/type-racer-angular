import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimerComponent } from './features/timer/timer.component';
import { TypingComponent } from './features/typing/typing.component';
import { ResultComponent } from './features/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    TypingComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
