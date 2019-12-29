import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Pet } from "../models/pet";

@Injectable({
  providedIn: "root"
})
export class FavouritesService {
  constructor() {}
  public isFavourite$ = new BehaviorSubject<boolean>(false);
  private petName: Pet; //Se cambiara el fav por el nombre de la mascota?

  public setFavourite() {
    let fav = localStorage.getItem("fav");
    let favNew = fav ? "" : "cloe";

    localStorage.setItem("fav", favNew);
    this.isFavourite$.next(favNew === "cloe" ? true : false);
    this.getFavourite();
  }
  public getFavourite() {
    this.isFavourite$.getValue();
  }
}
