import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor() { }


  private countries =  [
    {id: 4, itemName: "Almería"},
    {id: 11, itemName: "Cádiz"},
    {id: 14, itemName: "Córdoba"},
    {id: 18, itemName: "Granada"},
    {id: 21, itemName: "Huelva"},
    {id: 23, itemName: "Jaén"},
    {id: 29, itemName: "Málaga"},
    {id: 41, itemName: "Sevilla"},
    {id: 22, itemName: "Huesca"},
    {id: 44, itemName: "Teruel"},
    {id: 50, itemName: "Zaragoza"},
    {id: 33, itemName: "Asturias"},
    {id: 7, itemName: "Balears, Illes"},
    {id: 35, itemName: "Palmas, Las"},
    {id: 38, itemName: "Santa Cruz de Tenerife"},
    {id: 39, itemName: "Cantabria"},
    {id: 5, itemName: "Ávila"},
    {id: 9, itemName: "Burgos"},
    {id: 24, itemName: "León"},
    {id: 34, itemName: "Palencia"},
    {id: 37, itemName: "Salamanca"},
    {id: 40, itemName: "Segovia"},
    {id: 42, itemName: "Soria"},
    {id: 47, itemName: "Valladolid"},
    {id: 49, itemName: "Zamora"},
    {id: 2, itemName: "Albacete"},
    {id: 13, itemName: "Ciudad Real"},
    {id: 16, itemName: "Cuenca"},
    {id: 19, itemName: "Guadalajara"},
    {id: 45, itemName: "Toledo"},
    {id: 8, itemName: "Barcelona"},
    {id: 17, itemName: "Girona"},
    {id: 25, itemName: "Lleida"},
    {id: 43, itemName: "Tarragona"},
    {id: 3, itemName: "Alicante/Alacant"},
    {id: 12, itemName: "Castellón/Castelló"},
    {id: 46, itemName: "Valencia/València"},
    {id: 6, itemName: "Badajoz"},
    {id: 10, itemName: "Cáceres"},
    {id: 15, itemName: "Coruña, A"},
    {id: 27, itemName: "Lugo"},
    {id: 32, itemName: "Ourense"},
    {id: 36, itemName: "Pontevedra"},
    {id: 28, itemName: "Madrid"},
    {id: 30, itemName: "Murcia"},
    {id: 31, itemName: "Navarra"},
    {id: 1, itemName: "Araba/Álava"},
    {id: 48, itemName: "Bizkaia"},
    {id: 20, itemName: "Gipuzkoa"},
    {id: 26, itemName: "Rioja, La"},
    {id: 51, itemName: "Ceuta"},
    {id: 52, itemName: "Melilla"}
    ];

  private cities = [
    {id: 4, itemName: "Reus"},
    {id: 11, itemName: "Madrid"},
    {id: 14, itemName: "Valls"},
  ]

  public getCountries(){
    return this.countries;
  }
  public getCities(){
    return this.cities;
  }

}
