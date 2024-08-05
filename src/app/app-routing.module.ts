import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SevtPageComponent } from './sevt-page/sevt-page.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WordSearchComponent } from './word-search/word-search.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: 'home', component: HomeComponent},
  { path: 'sevt', component:SevtPageComponent },
  { path: 'wordSearch', component:WordSearchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
