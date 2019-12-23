import { User } from './user';

export class Person extends User {

  surname: string;
  age: string;
  gender: string;
  interestedIn: string;
  phone: string;
  livingPlace: string;
  pets: string;
  receptions: string;
  adoptions: string;
  favorites: Array<object>;

  constructor(){
    super( );
  }


}
