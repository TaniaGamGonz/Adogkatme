import { Injectable, OnInit } from '@angular/core';
import { Person } from '../models/person';
import { Pet } from '../models/pet';

@Injectable({
  providedIn: 'root'
})
export class FormService implements OnInit{

  constructor() {
  }

  ngOnInit() {
    this.firstForm;
    this.secondForm;
  }

  public firstForm;
  public secondForm;

  mergePersonForms(secondForm: Person): Person{
   return new Person({...this.firstForm, ...secondForm});
  }
  mergePetForms(thirdForm: Pet): Pet{
    return new Pet({...this.firstForm, ...this.secondForm, ...thirdForm});

  }



}
