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

  constructor() {

    //let pet: Pet = new Pet();
    //pet.id = 1,
    //pet.race = "Yorsai",
    //pet.name = "Cloe",
    //pet.owner = "Soraya",
    //pet.type = "Perro",
    //pet.gender = "Hembra",
    //pet.health = "Sana",
    //pet.age = "2 años",
    //pet.size = "Pequeña",
    //pet.activity = "Media",
    //pet.weight = "3kg",
    //pet.country = "Madrid",
    //pet.city = "Parla",
    //pet.description="Cloe es una perrita muy buena, le gusta jugar y es algo traviesa. Cuidado que es muy glotona y se sube a las mesas en busca de comida, no dejeis platos encima de las mesas u os quedareis sin comida.",
    //pet.videos = ["assets/videos/cloe.mp4"],
    //pet.independence = "Poco independiente",
    //pet.noisy = "A veces ladra",
    //pet.adoptionReason = "Falta de tiempo"
//
    //this.pets.push(pet);
//
    //pet = { ...pet, getDescription : pet.getDescription };
    //pet.name = "Mambo",
    //pet.id = 2
    //this.pets.push(pet);
//
    //pet = { ...pet, getDescription : pet.getDescription };
    //pet.name = "Rogue",
    //pet.id = 3,
    //this.pets.push(pet);

  }

  ngOnInit() {}

  public getPets(): Observable<Pet[]> {
    return of (PETS);
  }
  public getPetById(idPet: number): Observable<Pet> {

    return of (Object.assign(new Pet(), PETS.find((pet: Pet) => idPet === pet.id)));
  }
  public getPetPhotos(idPet: number): Array<string>{
    return ["assets/svg/cloe.svg","assets/svg/cloe.svg","assets/svg/cloe.svg"];
  }


}
