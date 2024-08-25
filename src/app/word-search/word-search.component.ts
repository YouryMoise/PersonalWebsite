import { Component } from '@angular/core';
import { Card } from '../app.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-word-search',
  templateUrl: './word-search.component.html',
  styleUrls: ['./word-search.component.css']
})
export class WordSearchComponent {
  cards:Card[] = []
  relevantCards = [
    "Initialization",
    "Solving",
    "Skills/Frameworks Used"
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
