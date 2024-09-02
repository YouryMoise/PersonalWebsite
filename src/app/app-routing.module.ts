import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SevtPageComponent } from './sevt-page/sevt-page.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WordSearchComponent } from './word-search/word-search.component';
import { ExtrasComponent } from './extras/extras.component';
import { ClassProjectsComponent } from './class-projects/class-projects.component';
import { InternshipsComponent } from './internships/internships.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { EcProjectComponent } from './ec-project/ec-project.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { EbayComponent } from './ebay/ebay.component';

const routes: Routes = [
  { path: '', redirectTo: '/highlights', pathMatch: 'full' }, // Default route
  { path: 'home', component: HomeComponent},
  { path: 'sevt', component:SevtPageComponent },
  { path: 'wordSearch', component:WordSearchComponent},
  { path: 'extras', component: ExtrasComponent,},
  { path: 'classProjects', component: ClassProjectsComponent},
  { path: 'internships', component: InternshipsComponent},
  { path: 'personal', component: PersonalProjectsComponent},
  { path: 'ec-project', component: EcProjectComponent},
  { path: 'highlights', component: HighlightsComponent},
  { path: 'ebay', component:EbayComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
