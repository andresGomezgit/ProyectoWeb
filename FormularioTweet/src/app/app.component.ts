import { Component } from '@angular/core';
import { Tweet } from '../tweets/Tweet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FormularioTweet';
  tweetsTitle = 'MIS TWEETS';
  miTweet: Tweet;

  constructor() {
    this.miTweet = {
       id: 1,
       texto: 'You know something is unusual when your code runs perfect at first time',
       autor: 'JustADevGuy'
     };
  }
}
