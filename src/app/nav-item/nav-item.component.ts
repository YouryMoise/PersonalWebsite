import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent {
  constructor(public router: Router){}
  @Input() title!:string;
  @Input() url!:string;
  @Input() link!:string;
  @Input() onMobile:boolean = false;
  ngOnInit(){
    console.log("Hello"+this.router.url);
  }
}
