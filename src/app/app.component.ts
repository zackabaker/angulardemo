import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  eventHandlers = {
   onRecordingStart: {handler: () => {
    console.log('recording started');
  }},
  onRecordingEnd: {handler: () => {
    console.log('recording ended');
   }}
 };


}
