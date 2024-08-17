import { Component } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-sevt-page',
  templateUrl: './sevt-page.component.html',
  styleUrls: ['./sevt-page.component.css']
})
export class SevtPageComponent {
  constructor(public breakpointObserver:BreakpointObserver){}
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
