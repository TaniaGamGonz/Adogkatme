import { Injectable, Inject } from "@angular/core";
import { Pet } from "../models/pet";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PetsService {
  private pets: Pet[] = [
    {
      name: "Cloe",
      type: "Perro",
      sex: "Hembra",
      health: "Sana",
      age: "2 años",
      size: "Pequeña",
      activity: "Media",
      weight: "3kg",
      country: "Madrid",
      city: "Parla",
      PPPlicense: false,
      aditionalInfo:
        "Cloe es una perrita muy cariñosa, le encanta jugar pero es algo miedosa.",
      photos: ["assets/svg/cloe.svg"],
      videos: "assets/videos/cloe.mp4",
      hasParasite: false,
      isHealthy: true,
      isVaccine: true,
      isSterilized: false,
      hasPrimer: false,
      hasChip: false,
      hasLeishmania: false,
      isInTreatment: false,
      hasInmunodeficiency: false,
      hasLeukemia: false,
      hasAllergy: false,
      allergies: "",
      isSociableKids: true,
      isSociablePeople: true,
      isSociableOtherAnimals: false,
      isSociablePets: false,
      independence: "Poco independiente",
      noisy: "A veces ladra",
      adoptionReason: "Falta de tiempo",
      pleasures: {
        play: false,
        scape: false,
        sleep: true,
        bath: false,
        eat: true,
        takeAWalk: false,
        car: false
      }
    },
    {
      name: "Mambo",
      type: "Gato",
      sex: "Macho",
      health: "Sano",
      age: "2 años",
      size: "Mediano",
      activity: "Media",
      weight: "3kg",
      country: "Madrid",
      city: "Parla",
      PPPlicense: false,
      aditionalInfo:
        "Mambo es un gato muy tranquilo, sociable con la gente y poco problemático. A veces le gusta tirar cosas de la mesa.",
      photos: ["assets/svg/cloe.svg"],
      videos: "",
      hasParasite: false,
      isHealthy: true,
      isVaccine: true,
      isSterilized: true,
      hasPrimer: false,
      hasChip: true,
      hasLeishmania: false,
      isInTreatment: false,
      hasInmunodeficiency: false,
      hasLeukemia: false,
      hasAllergy: false,
      allergies: "",
      isSociableKids: true,
      isSociablePeople: true,
      isSociableOtherAnimals: false,
      isSociablePets: false,
      independence: "Muy independiente",
      noisy: "A veces ladra",
      adoptionReason: "Falta de tiempo",
      pleasures: {
        play: false,
        scape: false,
        sleep: true,
        bath: false,
        eat: true,
        takeAWalk: false,
        car: false
      }
    },
    {
      name: "Cloe",
      type: "Perro",
      sex: "Hembra",
      health: "Sana",
      age: "2 años",
      size: "Pequeña",
      activity: "Media",
      weight: "3kg",
      country: "Madrid",
      city: "Parla",
      PPPlicense: false,
      aditionalInfo:
        "Cloe es una perrita muy cariñosa, le encanta jugar pero es algo miedosa.",
      photos: ["assets/svg/cloe.svg"],
      videos: "assets/videos/cloe.mp4",
      hasParasite: false,
      isHealthy: true,
      isVaccine: true,
      isSterilized: false,
      hasPrimer: false,
      hasChip: false,
      hasLeishmania: false,
      isInTreatment: false,
      hasInmunodeficiency: false,
      hasLeukemia: false,
      hasAllergy: false,
      allergies: "",
      isSociableKids: true,
      isSociablePeople: true,
      isSociableOtherAnimals: false,
      isSociablePets: false,
      independence: "Poco independiente",
      noisy: "A veces ladra",
      adoptionReason: "Falta de tiempo",
      pleasures: {
        play: false,
        scape: false,
        sleep: true,
        bath: false,
        eat: true,
        takeAWalk: false,
        car: false
      }
    },

  ];
  constructor() {}

  ngOnInit() {
  }

  public getPets() {
    return this.pets;
  }

}
