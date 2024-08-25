import { Component } from '@angular/core';
import { Card } from '../app.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-ec-project',
  templateUrl: './ec-project.component.html',
  styleUrls: ['./ec-project.component.css']
})
export class EcProjectComponent {
  cards:Card[] = []
  relevantCards = [
    "Image Feature Extraction",
    "Optimal K Value",
    "Object Recognition",
    "YoloV5 Tuning"
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
