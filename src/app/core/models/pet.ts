export class Pet {

  name: string;
  type: string;
  sex: string;
  health: string;
  age: string;
  size: string;
  activity: string;
  weight: string;
  country: string;
  city: string;
  PPPlicense: boolean;
  aditionalInfo: string;
  photos: Array<string>;
  videos: any; //¿Que tipo son los videos?
  hasParasite: boolean;
  isHealthy: boolean;
  isVaccine: boolean;
  isSterilized: boolean;
  hasPrimer: boolean;
  hasChip: boolean;
  hasLeishmania: boolean;
  isInTreatment: boolean;
  hasInmunodeficiency: boolean;
  hasLeukemia: boolean;
  hasAllergy: boolean;
  allergies: string;
  isSociableKids: boolean;
  isSociablePeople: boolean;
  isSociableOtherAnimals: boolean;
  isSociablePets: boolean;
  independence: string;
  noisy: string;
  adoptionReason: string;
  pleasures: Object = {
    play: false,
    scape: false,
    sleep: false,
    bath: false,
    eat: false,
    takeAWalk: false,
    car: false
  }

  constructor( ){ }


}
