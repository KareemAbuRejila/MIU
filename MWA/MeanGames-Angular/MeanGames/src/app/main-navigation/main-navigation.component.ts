import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css']
})
export class MainNavigationComponent implements OnInit {
  loggedinUser:string="Kareem";

  constructor() { }

  ngOnInit(): void {
  }

  public isLoggedIn():boolean{
    return true;
  }

}
