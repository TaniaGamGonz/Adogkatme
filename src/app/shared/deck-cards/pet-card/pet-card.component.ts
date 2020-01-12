import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';
import { FavouritesService } from 'src/app/core/services/favourites.service';
import { Subscription } from 'rxjs';
import { Pet } from 'src/app/core/models/pet';
import { PetsService } from 'src/app/core/services/pets.service';
@Component({
  selector: 'pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss']
})
export class PetCardComponent implements OnInit, OnDestroy{
  @Input( ) mascota: Pet;

  constructor(
    private loginService: LoginService,
    private favouriteService: FavouritesService,
    private petService: PetsService,

 ) { }

  public selectedId: number;
  private isLogged: boolean;
  private isFavourite: boolean;
  private subscription: Subscription;
  private loginSubscription: Subscription;
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
    this.loginSubscription = this.loginService.isLogged$.subscribe(data =>{ this.isLogged = data});
    this.subscription = this.favouriteService.isFavourite$.subscribe(data =>{
      this.isFavourite = data;
    });

    this.logged();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }



}
