import { Injectable } from "@angular/core";
import { Pet } from "../models/pet";
import { PETS } from "./pets-false";
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root"
})
export class PetsService {
  private pets: Pet[] = [];
  private pet: Pet;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {}

  public getPets():Observable<Pet[]> {
    const getPetsUrl = `${environment.apiUrl}${environment.petsResource}`;
    return this.http.get<Pet[]>(getPetsUrl);
  }
  public getPetById(idPet: string): Observable<Pet> {
    const getPetsUrl = `${environment.apiUrl}${environment.petsResource}/${idPet}`;
    return this.http.get<Pet>(getPetsUrl);
    //return of (Object.assign(new Pet({}), PETS.find((pet: Pet) => idPet === pet.id)));
  }
  public getPetPhotos(idPet: string): Array<string>{
    return ["assets/svg/cloe.svg","assets/svg/cloe.svg","assets/svg/cloe.svg"];
  }
  public removePetById(idPet: string): void{
  //  PETS.splice((idPet-1), 1);
  }


}
