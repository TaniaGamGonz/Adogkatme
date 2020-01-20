import { User } from './user';

export class Protective extends User{
  entityDocs: string;
  description: string;
  petsToReception: number;
  petsToAdoption: number;

  constructor(params){
    super(params);
    this.entityDocs = params ? params.entityDocs : "";
    this.description = params ? params.description : "";
    this.petsToReception = params ? params.petsToReception : 0;
    this.petsToAdoption = params ? params.petsToAdoption : 0;
  }
}
