import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/core/models/person';

@Component({
  selector: 'aditional-register',
  templateUrl: './aditional-register.component.html',
  styleUrls: ['./aditional-register.component.scss']
})
export class AditionalRegisterComponent implements OnInit {

  constructor(
    private router: Router
  ) { }
  private livingPlace: Array<Object>;
  private optionAdopcion: Array<Object>;
  private otherPets: Array<Object>;
  private person= new Person("","","","","","","","","", []);
  private phonePattern: RegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;



  ngOnInit() {

     this.livingPlace = [
      {id: 4, itemName: "Piso"},
      {id: 11, itemName: "Chalet"},
      {id: 14, itemName: "Casa con campo"},
    ]
    this.optionAdopcion = [
      {id: 1, itemName: "Adoptar"},
      {id: 2, itemName: "Acoger"},
    ]
    this.otherPets = [
      {id: 1, itemName: "Gato"},
      {id: 2, itemName: "Perro"},
      {id: 3, itemName: "Reptiles"},
      {id: 4, itemName: "Pajaros"},
      {id: 5, itemName: "Otros"},
    ]
  }

  onSubmit(){
    console.log(this.person.gender);
  }
}
