import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent {
  @Input() title!:string;
  @Input() imgLink!:string;
  @Input() text!:string;
  @Input() route!:string;
}
