import { User } from './user';

export class Protective extends User{
  entityDocs: string;
  description: string;
  petsToReception: number;
  petsToAdoption: number;

  constructor( ){
    super( )
  }
}
