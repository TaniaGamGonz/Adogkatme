import { Component, OnInit } from "@angular/core";
import { CountriesService } from 'src/app/core/services/countries.services/countries.service';
import { Person } from 'src/app/core/models/person';
import { Router } from '@angular/router';

@Component({
  selector: "app-register-user",
  templateUrl: "./register-user.component.html",
  styleUrls: ["./register-user.component.scss"]
})
export class RegisterUserComponent implements OnInit {
  constructor(
    private router: Router,
    private countriesService: CountriesService)
   {}
  private countries: Array<Object>;
  private cities: Array<Object>;;
  private person: Person = new Person;

  ngOnInit() {
     this.cities = this.countriesService.getCities();
     this.countries = this.countriesService.getCountries();

   /* this.cities = result.map(() => {
       return
      })
    });*/
  }

  onSubmit(){
    this.router.navigate(["/registro-adicional"]);
  }
}
