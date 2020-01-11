export class Pet {
  id: number;
  name: string;
  type: string;
  race: string;
  owner: string;
  gender: string;
  health: string;
  age: string;
  size: string;
  activity: string;
  weight: string;
  country: string;
  city: string;
  PPPlicense: string = "No necesita licencia PPP";
  description: string;
  photos: Array<string>;
  videos: Array<string>;
  hasParasite: string = "No está desparasitado/a";
  isHealthy: string = "No está sano/a";
  vaccine: string = "No está vacunado/a";
  sterilized: string = "No está esterilizado/a";
  primer: string = "No tiene cartilla";
  chip: string = "No tiene chip";
  leishmania: string = "No tiene leishmania";
  treatment: string = "No está en tratamiento médico";
  inmunodeficiency: string = "No tiene inmunodeficiencia";
  leukemia: string = "Negativo a leucemia";
  allergy: string = "Sin alergias"
  allergies: string;
  sociableKids: string = "No sociable con niños";
  sociablePeople: string = "No sociable con gente";
  sociableOtherAnimals: string =  "No sociable con animales";
  sociablePets: string = "No sociable con masotas";
  independence: string = "Nada independiente";
  noisy: string = "Poco ruidoso";
  adoptionReason: string;
  pleasures: Object = {
    play: "Jugueton/a",
    scape: "",
    sleep: "Dormilon/a",
    bath: "",
    eat: "Glotón/a",
    takeAWalk: "Vago/a",
    car: "",
  }

  getDescription(): string{
    if(!this.description){
    return `¡Hola me llamo ${this.name} y estaré encantad@ de formar parte de tu familia!` ;
    }
    return this.description;
  }

  constructor( ){ }


}
