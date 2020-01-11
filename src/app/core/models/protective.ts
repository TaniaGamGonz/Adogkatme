import { User } from './user';

export class Protective extends User{
  entityDocs: string;
  description: string;
  petsToReception: Array<object>;
  petsToAdoption: Array<object>;

  constructor( ){
    super( )
  }
}
