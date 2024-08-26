import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  public onMobile:boolean = false;
  public dialog = inject(MatDialog);
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
      const dialogRef = this.dialog.open(SearchComponent, {
        height: '40vw',
        width: '90vw',
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
    public tags:string[] = []
  ){
    
  }
}
