import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GamesListComponent } from './games-list/games-list.component';
import { GameOneComponent } from './game-one/game-one.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path:"games",
    component:GamesListComponent
  },
  {
    path:"game/:gameId",
    component:GameOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }