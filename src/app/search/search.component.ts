import { Component } from '@angular/core';
import { Card } from '../app.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  cards:Card[] = []
  isFirstFocus: boolean = true;
  phrases:string[] = [
    "headboard"
  ]
  inputBox:HTMLInputElement = document.getElementById("SearchInput") as HTMLInputElement;
  phrase:string = "";
  constructor(
    private appService:AppService
  ){
    // this.appService.searchCards(this.phrase).subscribe(cardList=>this.cards = cardList);
  }
  updateSearch(event:any):void{
    this.phrase = this.inputBox.value;
    if (this.phrase) this.appService.searchCards(this.phrase).subscribe(cardList=>this.cards = cardList);
    else this.cards = []
  }

  clearInput(event:any):void{
    if(this.isFirstFocus){
      this.inputBox.blur()
      this.isFirstFocus = false;
    }
    else{
      this.inputBox.value = "";

    }


  }

  ngOnInit():void{
    this.inputBox = document.getElementById("SearchInput") as HTMLInputElement;
    // this.phrase = this.inputBox.value;
    // this.appService.searchCards(this.phrase).subscribe(cardList=>this.cards = cardList);
    
  }
}
