import { Injectable } from '@angular/core';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() {

  }

  public firstForm;
  public secondForm;


  mergeForms(firsForm, secondForm){
  let  finalForm = {...this.firstForm, ...secondForm};
   return finalForm;
  }


}
