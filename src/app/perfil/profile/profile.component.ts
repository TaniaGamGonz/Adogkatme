import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';
import { Person } from 'src/app/core/models/person';
import { Observable, Subscription } from 'rxjs';
import { PersonService } from 'src/app/core/services/person.service';
import { switchMap } from 'rxjs/operators';
import { ParamMap, Router, ActivatedRoute } from '@angular/router';
import { PetsService } from 'src/app/core/services/pets.service';
import { Pet } from 'src/app/core/models/pet';

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
  ) { }
  private user: string;
  private isThisUser: boolean;
  private userId: string = "token";
  private person$: Observable<Person>;
  public id: number;
  private subscriptionPerson: Subscription;
  public photos: Array<string>;
  private pets$: Observable<Pet[]>


  private thisUser(){
    this.user = localStorage.getItem("user");
    this.isThisUser = this.user === this.userId ? true : false ;
  }
  private clearLogin(){
    this.loginService.clearLogin();
    this.thisUser();
  }


  ngOnInit() {
    this.thisUser();
    this.person$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.personService.getPersonById(parseInt(params.get('id'))))
    );
    this.subscriptionPerson = this.person$.subscribe( (person: Person) => {
      if(!person){
        this.router.navigate(['/home']);
      }
    })
    this.pets$ = this.petService.getPets();


  }


 ngOnDestroy(){
   this.subscriptionPerson.unsubscribe();
 }


}
