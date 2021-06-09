import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {Game} from '../games-list/games-list.component'
import{GamesDataService} from "../games-data.service";

@Component({
  selector: 'app-game-one',
  templateUrl: './game-one.component.html',
  styleUrls: ['./game-one.component.css']
})
export class GameOneComponent implements OnInit {
  game:Game={} as Game;

  constructor(private gameDataService:GamesDataService,private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    const gameId:string=this.activatedRouter.snapshot.params.gameId;
    this.getGameDetails(gameId);
  }

  private getGameDetails(gameId:string){
    this.gameDataService.getGameDeatils(gameId).then((resp)=>this.success(resp)).catch(this.err)
  }

  private success(resp:any){
    console.log(resp);
    this.game=resp as Game;
  }
  private err(err:any){
    console.log(err.message);
    
  }


}
