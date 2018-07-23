import { Component, OnInit } from '@angular/core';
import recordingbtntutorialModule from '@haiku/zackabaker1-recordingbtntutorial/angular-module';

@Component({
  selector: 'app-abc',
  template: `<recordingbtntutorial [loop]="true"></recordingbtntutorial>`,
  styleUrls: ['./abc.component.css']
})
export class AbcComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
