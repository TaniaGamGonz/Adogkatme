import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';
import { Person } from 'src/app/core/models/person';
import { Observable, Subscription } from 'rxjs';
import { PersonService } from 'src/app/core/services/person.service';
import { switchMap } from 'rxjs/operators';
import { ParamMap, Router, ActivatedRoute } from '@angular/router';
import { PetsService } from 'src/app/core/services/pets.service';
import { Pet } from 'src/app/core/models/pet';
import { FavouritesService } from 'src/app/core/services/favourites.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  constructor(
    private loginService: LoginService,
    private personService: PersonService,
    private petService: PetsService,
    private router: Router,
    private route: ActivatedRoute,
    private favoritesService: FavouritesService,
  ) { }
  private user: string;
  private isThisUser: boolean;
  private userId: string = "token";
  private person$: Observable<Person>;
  public id: string;
  private subscriptionPerson: Subscription;
  public photos: Array<string>;
  public pets$: Observable<Pet[]>;
  public favouritesPets$: Observable<String[]>;
  private favouritesPets: Pet[];
  private subscriptionPet: Subscription;
  private subscriptionFav: Subscription;



  private thisUser(){
    this.user = localStorage.getItem("user");
    this.isThisUser = this.user === this.userId ? true : false ;
  }
  private clearLogin(): void{
    this.loginService.clearLogin();
    this.thisUser();
  }
  private removePet(idPet: string): void{
    console.log(idPet);
    this.petService.removePetById(idPet).subscribe();
    this.pets$ = this.petService.getPets();

  }

  private getFavourites(userId: string): Observable<Pet[]>{
   return this.favoritesService.getFavouritesById(userId);
  }

  ngOnInit() {

    this.thisUser();

    this.person$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.personService.getPersonById(params.get('id')))
    );

    this.subscriptionPerson = this.person$.subscribe( (person: Person) => {
      if(!person){
        this.router.navigate(['/error']);
      }
      this.subscriptionFav = this.getFavourites(person._id).subscribe( data => {
        this.favouritesPets = data;
      });


    })
    this.pets$ = this.petService.getPets();




  }


 ngOnDestroy(){
   this.subscriptionPerson.unsubscribe();
 }


}
