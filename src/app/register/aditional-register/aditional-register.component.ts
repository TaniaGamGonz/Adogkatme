import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/core/models/person';
import { DropdownService } from 'src/app/core/services/dropdown.service';

@Component({
  selector: 'aditional-register',
  templateUrl: './aditional-register.component.html',
  styleUrls: ['./aditional-register.component.scss']
})
export class AditionalRegisterComponent implements OnInit {

  constructor(
    private router: Router,
    private dropdownService: DropdownService,
  ) { }
  private livingPlace: Array<Object>;
  private optionAdopcion: Array<Object>;
  private otherPets: Array<Object>;
  private person: Person = new Person;
  private phonePattern: RegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;



  ngOnInit() {
    this.livingPlace = this.dropdownService.getLivingPlace();
    this.optionAdopcion = this.dropdownService.getOtionAdopcion();
    this.otherPets = this.dropdownService.getOtherPets();

  }


  onSubmit(){
  }
}
