import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  public onMobile:boolean = false;
  constructor(private router: Router,public breakpointObserver: BreakpointObserver) {}

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


  title = 'personal_website';
  currentTab:number = 0;
  changeCurrentTab(x:number){
    this.currentTab = x;
  }
  
}

export class Card{
  constructor(
    public title:string = "",
    public imgLink:string = "",
    public text:string = "",
    public route:string = "",
    public date:string = "",
  ){
    
  }
}
