import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor() { }


  private countries =  [
    {itemName: "Almería"},
    { itemName: "Cádiz"},
    { itemName: "Córdoba"},
    { itemName: "Granada"},
    { itemName: "Huelva"},
    { itemName: "Jaén"},
    { itemName: "Málaga"},
    { itemName: "Sevilla"},
    { itemName: "Huesca"},
    { itemName: "Teruel"},
    { itemName: "Zaragoza"},
    { itemName: "Asturias"},
    {itemName: "Balears, Illes"},
    { itemName: "Palmas, Las"},
    { itemName: "Santa Cruz de Tenerife"},
    { itemName: "Cantabria"},
    {itemName: "Ávila"},
    {itemName: "Burgos"},
    { itemName: "León"},
    { itemName: "Palencia"},
    { itemName: "Salamanca"},
    { itemName: "Segovia"},
    { itemName: "Soria"},
    { itemName: "Valladolid"},
    { itemName: "Zamora"},
    {itemName: "Albacete"},
    { itemName: "Ciudad Real"},
    { itemName: "Cuenca"},
    { itemName: "Guadalajara"},
    { itemName: "Toledo"},
    {itemName: "Barcelona"},
    { itemName: "Girona"},
    { itemName: "Lleida"},
    { itemName: "Tarragona"},
    {itemName: "Alicante/Alacant"},
    { itemName: "Castellón/Castelló"},
    { itemName: "Valencia/València"},
    {itemName: "Badajoz"},
    { itemName: "Cáceres"},
    { itemName: "Coruña, A"},
    { itemName: "Lugo"},
    { itemName: "Ourense"},
    { itemName: "Pontevedra"},
    { itemName: "Madrid"},
    { itemName: "Murcia"},
    { itemName: "Navarra"},
    {itemName: "Araba/Álava"},
    { itemName: "Bizkaia"},
    { itemName: "Gipuzkoa"},
    { itemName: "Rioja, La"},
    { itemName: "Ceuta"},
    { itemName: "Melilla"}
    ];

  private cities = [
    { itemName: "Reus"},
    { itemName: "Madrid"},
    { itemName: "Valls"},
  ]

  public getCountries(){
    return this.countries;
  }
  public getCities(){
    return this.cities;
  }

}
