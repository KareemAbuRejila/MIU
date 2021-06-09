import { Component, OnInit } from '@angular/core';

import{GamesDataService} from "../games-data.service";

export class Game{
  _id!:number;
  title!:string;
  price!:number;
  minPlayers!:number;
  maxPlayer!:number;
  minAge!:number;
}


@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  titleTest="GamesList"
  games:Game[]=[]


  constructor(private gameDateServicec:GamesDataService) { }

  ngOnInit(): void {
    this.getAllGames();
  }

  private getAllGames():void{
    this.gameDateServicec.getAllGames().then((resp)=>this.getGames(resp)).catch(this.err)
  }

  private getGames(resp:Game[]){
    console.log(resp);
    
    this.games=resp as Game[]
  }
  private err(err:any){
    console.log(err);
    
  }

}
