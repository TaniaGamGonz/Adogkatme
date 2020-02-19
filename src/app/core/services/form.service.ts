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




}
