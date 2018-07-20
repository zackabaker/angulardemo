import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AbcComponent } from './abc/abc.component';
import recordingbtntutorialModule from '@haiku/zackabaker1-recordingbtntutorial/angular-module';

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
