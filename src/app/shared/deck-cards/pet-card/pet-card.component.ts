import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';
import { FavouritesService } from 'src/app/core/services/favourites.service';
import { Pet } from 'src/app/core/models/pet';
import { PetsService } from 'src/app/core/services/pets.service';
@Component({
  selector: 'pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss']
})
export class PetCardComponent implements OnInit, OnDestroy{
  @Input( ) mascota: Pet;
  @Input( ) showHeart: boolean;

  constructor(
    private loginService: LoginService,
    private favouriteService: FavouritesService,
    private petService: PetsService,

 ) { }

  public selectedId: number;
  private isLogged: boolean;
  private isFavourite:boolean;
  public userId: string;


  public setFavourite(idPerson : string, idPet: string): void{
    this.favouriteService.setFavourites(idPerson, idPet)
                         .subscribe(()=>this.checkFavourite(idPet, idPerson));

  }
  private checkFavourite(idPet: string, idUser: string): void{
    let favourites : Array<Pet>;
    let isFavourite;
    const favouriteSubscription =  this.favouriteService.getFavouritesById(idUser).subscribe(( data)=>{
      favourites = data;
    let existFavourite = favourites.find( (pet: Pet)=> pet._id == this.mascota._id);
     if(existFavourite){
      this.isFavourite = true;
    }else{
      this.isFavourite = false;
    }
    });


  }



  ngOnInit() {
    this.isLogged = this.loginService.user.logged;
    if ( this.isLogged && this.mascota){
      this.userId = this.loginService.user.id;
      this.checkFavourite(this.mascota._id, this.userId)
    }

  }


  ngOnDestroy(): void {
  }



}
