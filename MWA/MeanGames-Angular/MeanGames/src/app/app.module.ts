import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { GamesListComponent } from './games-list/games-list.component';
import { GameOneComponent } from './game-one/game-one.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';

@NgModule({

  declarations: [
    AppComponent,
    HomePageComponent,
    GamesListComponent,
    GameOneComponent,
    MainNavigationComponent,
    
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '',
       component: HomePageComponent},
      {
        path:"games",
        component:GamesListComponent
      },
      {
        path:"game/:gameId",
        component:GameOneComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
