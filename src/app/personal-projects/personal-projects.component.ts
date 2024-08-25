import { Component } from '@angular/core';
import { Card } from '../app.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.css']
})
export class PersonalProjectsComponent {
  cards:Card[] = []
  relevantCards = [
    "Word Search Solver",
    "Tree Algorithm Visualizer"
  ]
  constructor(
    private appService:AppService
  ){
    this.appService.getCards(this.relevantCards).subscribe(cardList=>this.cards = cardList);
  }

  ngOnInit():void{
    console.log(this.cards);
  }
}
