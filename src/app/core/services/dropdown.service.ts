import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DropdownService {
  private petHealth = [
    { id: 1, itemName: "Sano" },
    { id: 2, itemName: "Por examinar" },
    { id: 2, itemName: "Enfermo" }
  ];
  private petAge = [
    { id: 1, itemName: "Años" },
    { id: 2, itemName: "Semanas" },
    { id: 3, itemName: "No se sabe" }
  ];
  private petSize = [
    { id: 1, itemName: "Grande" },
    { id: 2, itemName: "Mediano" },
    { id: 3, itemName: "Pequeño" },
    { id: 4, itemName: "Mini" }
  ];
  private petActivity = [
    { id: 1, itemName: "Muy activo" },
    { id: 2, itemName: "Medianamente activo" },
    { id: 3, itemName: "Poco activo" },
    { id: 4, itemName: "Vago, ni sale a pasear" }
  ];

  private livingPlace = [
    { id: 4, itemName: "Piso" },
    { id: 11, itemName: "Chalet" },
    { id: 14, itemName: "Casa con campo" }
  ];
  private optionAdoption = [
    { id: 1, itemName: "Adoptar" },
    { id: 2, itemName: "Acoger" }
  ];
  private otherPets = [
    { id: 1, itemName: "Gato" },
    { id: 2, itemName: "Perro" },
    { id: 3, itemName: "Reptiles" },
    { id: 4, itemName: "Pajaros" },
    { id: 5, itemName: "Otros" }
  ];
  private petIndependence = [
    { id: 1, itemName: "Muy independiente" },
    { id: 2, itemName: "Dependiente por las noches" },
    { id: 3, itemName: "Poco dependiente" },
    { id: 4, itemName: "Muy dependiente" }
  ];
  private petNoise = [
    { id: 1, itemName: "Muy ruidoso" },
    { id: 2, itemName: "Ruidoso por las noches" },
    { id: 3, itemName: "Poco ruidoso" },
  ];
  private reasonAdoption = [
    { id: 1, itemName: "Divorcio" },
    { id: 2, itemName: "Nacimiento de bebé" },
    { id: 3, itemName: "Problemas económicos" },
    { id: 4, itemName: "Mudanza" },
    { id: 5, itemName: "Rescatado de la calle" }

  ];


  public getPetHealth(): Array<Object> {
    return this.petHealth;
  }
  public getPetAge(): Array<Object> {
    return this.petAge;
  }
  public getPetSize(): Array<Object> {
    return this.petSize;
  }
  public getPetActivity(): Array<Object> {
    return this.petActivity;
  }
  public getLivingPlace(): Array<Object> {
    return this.livingPlace;
  }
  public getOptionAdoption(): Array<Object> {
    return this.optionAdoption;
  }
  public getOtherPets(): Array<Object> {
    return this.otherPets;
  }
  public getPetIndependence(): Array<Object>{
    return this.petIndependence;
  }
  public getPetNoise(): Array<Object>{
    return this.petNoise;
  }
  public getReasonAdoption(): Array<Object>{
    return this.reasonAdoption;
  }



  constructor() {}
}
