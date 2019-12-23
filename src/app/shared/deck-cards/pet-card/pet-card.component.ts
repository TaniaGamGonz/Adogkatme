import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';
import { FavouritesService } from 'src/app/core/services/favourites.service';

@Component({
  selector: 'pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss']
})
export class PetCardComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private favouriteService: FavouritesService,
  ) { }

  private isLogged: boolean;
  private isFavourite: boolean;
  private logged(){
    this.loginService.logged();
  }

  private setFavourite(){
    this.favouriteService.setFavourite();
  }
  private getFavourite(){
    this.favouriteService.getFavourite();
  }


  ngOnInit() {
    this.isLogged = this.loginService.isLogged;
    this.isFavourite = this.favouriteService.isFavourite;
    this.logged();
    this.getFavourite();
  }



}
