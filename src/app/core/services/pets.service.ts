import { Injectable } from "@angular/core";
import { Pet } from "../models/pet";
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
    return this.http.get<Pet[]>(getPetsUrl,{withCredentials:true});
  }
  public getPetById(idPet: string): Observable<Pet> {
    const petUrl = `${environment.apiUrl}${environment.petsResource}/${idPet}`;
    return this.http.get<Pet>(petUrl);
  }

  public createPet(pet: Pet){
    const petsUrl = `${environment.apiUrl}${environment.petsResource}`;
    this.http.post(petsUrl, pet)
   return this.http.post(petsUrl, pet);
  }
  public removePetById(idPet: string){
    const petUrl = `${environment.apiUrl}${environment.petsResource}/${idPet}`;
     return this.http.delete(petUrl);
  }


}
