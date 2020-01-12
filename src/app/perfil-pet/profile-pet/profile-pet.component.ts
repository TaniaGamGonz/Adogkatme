import { Component, OnInit, OnDestroy } from '@angular/core';
import { Pet } from 'src/app/core/models/pet';
import { PetsService } from 'src/app/core/services/pets.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'profile-pet',
  templateUrl: './profile-pet.component.html',
  styleUrls: ['./profile-pet.component.scss']
})
export class ProfilePetComponent implements OnInit, OnDestroy{


  constructor(
    private petsService: PetsService,
    private router: Router,
    private route: ActivatedRoute )
  {  }

   private pet$: Observable<Pet>;
   public id: number;
   private subscriptionPet: Subscription;
   public photos: Array<string>;

  ngOnInit() {
    this.pet$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.petsService.getPetById(parseInt(params.get('id'))))
    );
    this.subscriptionPet = this.pet$.subscribe( (pet: Pet) => {
      if(!pet){
        this.router.navigate(['/home']);
      }
    })
    this.photos = this.petsService.getPetPhotos(2);
  }
  ngOnDestroy(){
    this.subscriptionPet.unsubscribe();
  }


}
