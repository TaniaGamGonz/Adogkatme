import { Component, OnInit } from "@angular/core";
import { CountriesService } from "src/app/core/services/countries.services/countries.service";

@Component({
  selector: "app-register-pet-general",
  templateUrl: "./register-pet-general.component.html",
  styleUrls: ["./register-pet-general.component.scss"]
})
export class RegisterPetGeneralComponent implements OnInit {
  constructor(private countriesService: CountriesService) {}
  private petHealth: Array<Object>;
  private petAge: Array<Object>;
  private petSize: Array<Object>;
  private petActivity: Array<Object>;
  private countries: Array<Object>;
  private cities: Array<Object>;

  ngOnInit() {
    this.petHealth = [
      { id: 1, itemName: "Sano" },
      { id: 2, itemName: "Por examinar" },
      { id: 2, itemName: "Enfermo" }
    ];
    this.petAge = [
      { id: 1, itemName: "Años" },
      { id: 2, itemName: "Semanas" },
      { id: 3, itemName: "No se sabe" }
    ];
    this.petSize = [
      { id: 1, itemName: "Grande" },
      { id: 2, itemName: "Mediano" },
      { id: 3, itemName: "Pequeño" },
      { id: 4, itemName: "Mini" }
    ];
    this.petActivity = [
      { id: 1, itemName: "Muy activo, necesita hacer deporte" },
      { id: 2, itemName: "Medianamente activo" },
      { id: 3, itemName: "Poco activo" },
      { id: 4, itemName: "Vago, ni sale a pasear" }
    ];
    this.cities = this.countriesService.getCities();
    this.countries = this.countriesService.getCountries();



  }
}
