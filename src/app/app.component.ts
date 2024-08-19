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

  // tell(){
  //   console.log(this.router.url)
  // }
  ngOnInit() {
    // console.log(this.router.url);
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
