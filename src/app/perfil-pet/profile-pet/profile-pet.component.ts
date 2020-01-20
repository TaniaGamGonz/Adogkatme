import { Component, OnInit, OnDestroy } from '@angular/core';
import { Pet } from 'src/app/core/models/pet';
import { PetsService } from 'src/app/core/services/pets.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable, Subscription, of, BehaviorSubject } from 'rxjs';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'profile-pet',
  templateUrl: './profile-pet.component.html',
  styleUrls: ['./profile-pet.component.scss']
})
export class ProfilePetComponent implements OnInit, OnDestroy{


  constructor(
    private petsService: PetsService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: ModalService )
  {  }

   private pet$: Observable<Pet>;
   private pet: Pet;
   private photo$: BehaviorSubject<number>;
   public id: number;
   private subscriptionPet: Subscription;
   private subscriptionImages: Subscription;
   public modalToken: string = 'petImg-modal';
   public imageSource: string ="";

  ngOnInit() {
    this.pet$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.petsService.getPetById(parseInt(params.get('id'))))
    );

    this.photo$ = new BehaviorSubject<number>(-1);
    this.subscriptionPet = this.pet$.subscribe( (pet: Pet) => {
      if(!pet){
        this.router.navigate(['/home']);
      }
      else
        this.pet = pet;
    })
    this.subscriptionImages = this.photo$.subscribe((index: number) => this.imageSource=this.pet.photos[index])
  }

  onBeforeIndexPhoto(): void{
    let index = this.photo$.getValue();
    index = (index<=0) ? this.pet.photos.length-1 : --index;
    this.photo$.next(index);
  }

  onAfterIndexPhoto(): void{
    let index = this.photo$.getValue();
    index = (index) >= this.pet.photos.length-1 ? 0 : ++index;
    this.photo$.next(index);
  }

  toggleModal(index: number):void {
    this.modalService.toggleModal(this.modalToken);
    this.photo$.next(index);
  }

  ngOnDestroy(): void{
    this.subscriptionPet.unsubscribe();
    this.subscriptionImages.unsubscribe();
  }


}
