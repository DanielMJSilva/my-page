import { Component, OnInit } from '@angular/core';
import { faJs, faJava, faAngular, faBootstrap, faNode, faCuttlefish, faAndroid, faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
faJs = faJs;
faJava = faJava;
faCuttlefish = faCuttlefish;
faDatabase = faDatabase;
faAndroid = faAndroid;
faBootstrap = faBootstrap;
faNode =faNode;
faAngular = faAngular;
faCss3 = faCss3;






  constructor() { }

  ngOnInit(): void {
  }

}
