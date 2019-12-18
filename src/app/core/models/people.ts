import { User } from './user';

export class People extends User {
  surname: string
  age: number
  sex: string
  interestedIn: string
  phone: number
  livingPlace: string
  pets: string
  receptions: number
  adoptions: number
  favorites: Array<object> //Aquí irian los favoritos....?????????
}
