import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Card } from '../app.component';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent {

  cards:Card[] = []
  relevantCards = [
    "Solar Electric Vehicle Team (SEVT)",
    "eBay Software Engineering Intern",
    "Word Search Solver"
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
