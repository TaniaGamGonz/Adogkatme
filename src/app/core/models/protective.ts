import { User } from './user';

export class Protective extends User{
  entityDocs: any; //Falta tiparlo, serian documentos de texto o imágenes
  description: string;
  petsToReception: Array<object>;
  petsToAdoption: Array<object>;

  constructor( ){
    super( )
  }
}
