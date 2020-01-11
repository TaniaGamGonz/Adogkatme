import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/core/models/pet';
import { PetsService } from 'src/app/core/services/pets.service';

@Component({
  selector: 'profile-pet',
  templateUrl: './profile-pet.component.html',
  styleUrls: ['./profile-pet.component.scss']
})
export class ProfilePetComponent implements OnInit {


  constructor(private petsService: PetsService)
  {  }

   private pet: Pet;
   public photos: Array<string>;

  ngOnInit() {
    this.pet = this.petsService.getPetById(0);
    this.photos = this.petsService.getPetPhotos(2);
    console.log(this.photos);
  }

}
