import { Component } from '@angular/core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {Title} from "@angular/platform-browser";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faLinkedin = faLinkedin;
  faGithub = faGithub;

  constructor(private titleService:Title) {
    this.titleService.setTitle("Daniel Silva");
  }
}
