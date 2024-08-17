import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent {
  constructor(public breakpointObserver:BreakpointObserver){}
  @Input() title!:string;
  @Input() imgLink!:string;
  @Input() text!:string;
  @Input() route!:string;
  @Input() date!:string;
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

  
  // ngOnInit(){
  //   console.log(this.onMobile)
  // }
}
