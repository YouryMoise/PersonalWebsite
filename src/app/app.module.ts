import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { LayoutModule } from '@angular/cdk/layout';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SevtPageComponent } from './sevt-page/sevt-page.component';
import { HomeComponent } from './home/home.component';
import { WordSearchComponent } from './word-search/word-search.component';
import { ExtrasComponent } from './extras/extras.component';
import { ClassProjectsComponent } from './class-projects/class-projects.component';
import { InternshipsComponent } from './internships/internships.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { EcProjectComponent } from './ec-project/ec-project.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    SevtPageComponent,
    HomeComponent,
    WordSearchComponent,
    ExtrasComponent,
    ClassProjectsComponent,
    InternshipsComponent,
    PersonalProjectsComponent,
    InfoCardComponent,
    EcProjectComponent,
    HighlightsComponent,
    NavItemComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatTabsModule,
    LayoutModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
