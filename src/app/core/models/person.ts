import { User } from './user';

export class Person extends User {
  gender: any;
 constructor(
  surname: string,
  age: string,
  gender: string,
  interestedIn: string,
  phone: string,
  livingPlace: string,
  pets: string,
  receptions: string,
  adoptions: string,
  favorites: Array<object>)
  {
   super("","","","","",[],[]);
  }
}
