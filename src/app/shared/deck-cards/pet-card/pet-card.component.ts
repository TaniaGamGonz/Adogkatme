import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss']
})
export class PetCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  private isLogged: boolean = false;
  private isFavourite: boolean = false;
  private logged() {
    const user = localStorage.getItem("user");
    this.isLogged = (user && user !== "") ? true : false ;
  }


}
