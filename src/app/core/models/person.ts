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
  inAdoption: Array<number>;
  favorites: Array<number>;

  constructor(){
    super( );
  }


}
