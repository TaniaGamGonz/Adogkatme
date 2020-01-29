import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DropdownService {
  private petHealth = [
    {  itemName: "Sano/a" },
    {  itemName: "Por examinar" },
    {  itemName: "Enfermo/a" }
  ];
  private petAge = [
    {  itemName: "Años" },
    {  itemName: "Semanas" },
    {  itemName: "No se sabe" }
  ];
  private petSize = [
    {  itemName: "Grande" },
    {  itemName: "Mediano" },
    {  itemName: "Pequeño" },
    {  itemName: "Mini" }
  ];
  private petActivity = [
    {  itemName: "Muy activo" },
    {  itemName: "Medianamente activo" },
    {  itemName: "Poco activo" },
    {  itemName: "Vago, ni sale a pasear" }
  ];

  private livingPlace = [
    {  itemName: "Piso" },
    {  itemName: "Chalet" },
    {  itemName: "Casa con campo" }
  ];
  private optionAdoption = [
    { id: 1, itemName: "Adoptar" },
    { id: 2, itemName: "Acoger" }
  ];
  private otherPets = [
    { id:1, itemName: "Gato" },
    { id:2, itemName: "Perro" },
    { id:3, itemName: "Reptiles" },
    { id:4, itemName: "Pajaros" },
    { id:5, itemName: "Otros" }
  ];
  private petIndependence = [
    {  itemName: "Muy independiente" },
    {  itemName: "Dependiente por las noches" },
    {  itemName: "Poco dependiente" },
    {  itemName: "Muy dependiente" }
  ];
  private petNoise = [
    {  itemName: "Muy ruidoso" },
    {  itemName: "Ruidoso por las noches" },
    {  itemName: "Poco ruidoso" },
  ];
  private reasonAdoption = [
    {  itemName: "Divorcio" },
    {  itemName: "Nacimiento de bebé" },
    {  itemName: "Problemas económicos" },
    {  itemName: "Mudanza" },
    {  itemName: "Rescatado de la calle" }

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
