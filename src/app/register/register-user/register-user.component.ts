import { Component, OnInit } from "@angular/core";
import { EndpointsService } from 'src/app/core/services/endpoints.service';
import { CountriesService } from 'src/app/core/services/countries.services/countries.service';

@Component({
  selector: "app-register-user",
  templateUrl: "./register-user.component.html",
  styleUrls: ["./register-user.component.scss"]
})
export class RegisterUserComponent implements OnInit {
  constructor(
    private endpointService: EndpointsService,
    private countriesService: CountriesService)
   {}
  private countries = [];
  private cities = [];

  ngOnInit() {
     this.cities = this.countriesService.getCities();
     this.countries = this.countriesService.getCountries();


   /* this.cities = result.map(() => {
       return
      })
    });*/

  }
}
