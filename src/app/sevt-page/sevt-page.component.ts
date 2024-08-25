import { Component } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Card } from '../app.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-sevt-page',
  templateUrl: './sevt-page.component.html',
  styleUrls: ['./sevt-page.component.css']
})
export class SevtPageComponent {
  cards:Card[] = []
  relevantCards = [
    "Battery Management System (BMS)",
    "Cellboards",
    "Motors",
    "CAN Library Restructuring",
    "Serial Drivers",
    "Infotainment",
  ]
  constructor(public breakpointObserver:BreakpointObserver,
    private appService:AppService
  ){
    this.appService.getCards(this.relevantCards).subscribe(cardList=>this.cards = cardList);
  }
  onMobile:boolean = false;
  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 800px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.onMobile = false;
        } else {
          this.onMobile = true;
        }
      });
  }
}
