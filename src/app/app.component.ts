import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router ) {

  }
  title = 'personal_website';
  currentTab:number = 0;
  changeCurrentTab(x:number){
    this.currentTab = x;
    // alert(this.router.url)
    // alert(this.currentTab)
  }
  // This doesn't work because the url is just / by the time this is called
  // ngOnInit(){
  //   if (this.router.url == "/extras") this.currentTab = 0;
  //   if (this.router.url == "/classProjects") this.currentTab = 1;
  //   if (this.router.url == "/internships") this.currentTab = 2;
  //   if (this.router.url == "/personal") this.currentTab = 3;
  // }
}
