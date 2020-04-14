import { Component } from '@angular/core';
import { Github } from './github-class/github';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public github1: Github;

  constructor() {
    this.github1 = new Github(false, null, '');
  }
  
}
