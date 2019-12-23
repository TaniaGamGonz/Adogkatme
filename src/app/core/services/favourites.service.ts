import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  constructor() { }
  public isFavourite: boolean;

  public setFavourite(){
    const fav = localStorage.setItem("fav", "cloe");
  }
  public getFavourite(){
    const fav = localStorage.getItem("fav");
    this.isFavourite = (fav && fav === "cloe" ) ? true : false;
    //TODO: Que la condicon no sea "cloe" si no que sea dinámica en funcion de cada mascota.
  }

}
