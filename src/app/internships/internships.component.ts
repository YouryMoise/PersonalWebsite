import { Component } from '@angular/core';
import { Card } from '../app.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-internships',
  templateUrl: './internships.component.html',
  styleUrls: ['./internships.component.css']
})
export class InternshipsComponent {
  cards:Card[] = []
  relevantCards = [
    "eBay Software Engineering Intern",
    "Pacific Gas & Electric Company - Information Technology Intern",
    "Friends of The Underline - Technology Intern",
    "3D Hologroup - Marketing Intern"
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
