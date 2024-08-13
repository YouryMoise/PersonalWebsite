import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personal_website';
  currentTab:number = 0;
  changeCurrentTab(x:number){
    this.currentTab = x;
    // alert(this.currentTab)
  }
}
