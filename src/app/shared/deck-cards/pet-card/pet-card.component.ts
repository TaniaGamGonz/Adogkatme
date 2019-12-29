import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';
import { FavouritesService } from 'src/app/core/services/favourites.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss']
})
export class PetCardComponent implements OnInit, OnDestroy{

  constructor(
    private loginService: LoginService,
    private favouriteService: FavouritesService,
  ) { }

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
