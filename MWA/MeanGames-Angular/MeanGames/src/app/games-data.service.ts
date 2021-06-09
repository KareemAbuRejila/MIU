import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";

import {Game} from "./games-list/games-list.component";

@Injectable({
  providedIn: 'root'
})
export class GamesDataService {

  private baseUrl:string="http://127.0.0.1:5000/api"

  constructor(private http:HttpClient) { }

  public getAllGames():Promise<Game[]>{
    const url:string=this.baseUrl+"/games";

    return this.http.get(url).toPromise().then(this.getGames).catch(this.errGames);
  }
  public getGameDeatils(gameId:string):Promise<Game>{
    const gameUrl:string=this.baseUrl+"/games/"+gameId;
    return this.http.get(gameUrl).toPromise().then(this.getOneGame).catch(this.errOneGame)
  }
  private getOneGame(resp:any):Game{
    return resp as Game;
  }


  private getGames(res:any):Game[]{
    return res as Game[]
  }
  private errGames(err:any):Game[]{
    console.log("Error",err.message);
    return [];
  }
  private errOneGame(err:any):Game{
    console.log("Error",err.message);
    return err;
  }
}
