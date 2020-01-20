import { Injectable } from "@angular/core";
import { Pet } from "../models/pet";
import { PETS } from "./pets-false";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class PetsService {
  private pets: Pet[] = [];
  private pet: Pet;

  constructor() { }

  ngOnInit() {}

  public getPets(): Observable<Pet[]> {
    return of (PETS);
  }
  public getPetById(idPet: number): Observable<Pet> {

    return of (Object.assign(new Pet({}), PETS.find((pet: Pet) => idPet === pet.id)));
  }
  public getPetPhotos(idPet: number): Array<string>{
    return ["assets/svg/cloe.svg","assets/svg/cloe.svg","assets/svg/cloe.svg"];
  }
  public removePetById(idPet: number): void{
    PETS.splice((idPet-1), 1);
  }


}
