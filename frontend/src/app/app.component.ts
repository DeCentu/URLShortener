import { Component } from '@angular/core';
import {enableProdMode} from '@angular/core';
enableProdMode();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'URL Shortener';
  secondtitle = 'Making a shorter url';
  copyrights = 'URL Shortener | 2018';
}
