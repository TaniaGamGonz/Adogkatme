import { User } from './user';

export class Person extends User {

  surname: string;
  age: number;
  gender: string;
  interestedIn: Array<Object>;
  phone: string;
  livingPlace: Array<Object>;
  pets: Array<Object>;
  receptions: string;
  adoptions: string;
  inAdoption: Array<number>;
  favorites: Array<number>;

  constructor(params){
    super(params)
    this.surname = params.surname ? params.surname : "";
    this.age = params.age ? params.age : 0;
    this.gender = params.gender ? params.gender: "";
    this.interestedIn = params.interestedIn ? params.interestedIn: [];
    this.phone = params.phone ? params.phone: null;
    this.livingPlace = params.livingPlace ? params.livingPlace: []
    this.pets = params.pets ? params.pets: [];
    this.receptions = params.receptions ? params.receptions: "";
    this.adoptions = params.adoptions ? params.adoptions: "";
    this.inAdoption = params.isAdoption ? params.inAdoption: [];
    this.favorites = params.favorites ? params.favorites: [];
  }


}
