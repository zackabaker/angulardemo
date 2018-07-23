import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AbcComponent } from './abc/abc.component';
import * as recordingbtntutorialModule from '@haiku/zackabaker1-recordingbtntutorial/code/main/angular-dom';

@NgModule({
  declarations: [
    AppComponent,
    AbcComponent
  ],
  imports: [
    BrowserModule,
    recordingbtntutorialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
