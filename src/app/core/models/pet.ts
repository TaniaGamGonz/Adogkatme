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
  PPPlicense: boolean;
  description: string;
  photos: Array<string>;
  videos: Array<string>;
  parasite: boolean;
  vaccined: boolean;
  sterilized: boolean;
  primer: boolean;
  chip: boolean;
  leishmania: boolean;
  treatment: boolean;
  inmunodeficiency: boolean;
  leukemia: boolean;
  allergy: boolean;
  allergies: string;
  sociableKids: boolean;
  sociablePeople: boolean;
  sociableOtherAnimals: boolean;
  sociablePets: boolean;
  independence: Object;
  noisy: Object;
  adoptionReason: Object;
  play: boolean ;
  scape: boolean ;
  sleep: boolean;
  bath: boolean ;
  eat: boolean ;
  takeAWalk: boolean ;
  car: boolean ;

  getDescription(): string {
    if (!this.description) {
      return `¡Hola, me llamo ${this.name} y estaré encantad@ de formar parte de tu familia!`;
    }
    return this.description;
  }
  getPPP():string{
    if(this.PPPlicense){
      return "Necesita licencia PPP";
    }
  }

  getParasite():string{
    if(this.parasite){
      return "Está desparasitado/a";
    }
    return "No está desparasitado/a";
  }
  getVaccined():string{
    if(this.vaccined){
      return "Está vacunado/a";
    }
    return "No está vacunado/a";
  }
  getSterilized():string{
    if(this.sterilized){
      return "Está esterilizado/a";
    }
    return "No está esterilizado/a";
  }
  getPrimer():string{
    if(this.primer){
      return "Tiene cartilla sanitaria";
    }
    return "No tiene cartilla";
  }
  getChip():string{
    if(this.chip){
      return "Tiene chip";
    }
    return "No tiene chip";
  }
  getLeishmania():string{
    if(this.leishmania){
      return "Tiene leishmania";
    }
    return "No tiene leishmania";
  }
  getLeukemia():string{
    if(this.leukemia){
      return "Tiene leucemia";
    }
    return "No tiene leucemia";
  }
  getTreatment():string{
    if(this.treatment){
      return "Está en tratamiento médico";
    }
    return "No está en tratamiento médico";
  }
  getInmunodecifiency():string{
    if(this.inmunodeficiency){
      return "Tiene inmunodeficiencia";
    }
    return "No tiene inmunodeficiencia";
  }
  getAllergies():string{
    if(this.allergy){
      return "No tiene alergias";
    }
    return this.allergies;
  }
  getSociableWithKids():string{
    if(this.sociableKids){
      return "Le gustan los niños";
    }
    return "No le gustan los niños";
  }
  getSociableWithPeople():string{
    if(this.sociablePeople){
      return "Sociable con los desconocidos";
    }
    return "No sociable con los desconocidos";
  }
  getSociableWithOtherAnimals():string{
    if(this.sociableKids){
      return `Sociable con los otros ${this.race}s`;
    }
    return `No sociable con los otros ${this.race}s`;
  }
  getSociableWithOtherPets():string{
    if(this.sociableKids){
      return "Sociable con los otros animales";
    }
    return "No sociable con los otros animales";
  }

  constructor(params) {
    this.id = params ? params.id : 0;
    this.name = params ? params.name : "";
    this.type = params ? params.type : "";
    this.race = params ? params.race : "";
    this.owner = params ? params.owner : "";
    this.gender = params ? params.gender : "";
    this.health = params ? params.health : "";
    this.age = params ? params.age : "";
    this.size = params ? params.size : "";
    this.activity = params ? params.activity : "";
    this.weight = params ? params.weight : "";
    this.country = params ? params.country : "";
    this.city = params ? params.city : "";
    this.PPPlicense = params ? params.PPPlicense : false ;
    this.description = params ? params.description : "";
    this.photos = params ? params.photos : [];
    this.videos = params ? params.videos : "";
    this.parasite = params ? params.parasite : true;
    this.vaccined = params ? params.vacine :false;
    this.sterilized = params ? params.sterilized : false;
    this.primer = params ? params.primer : false;
    this.chip = params ? params.chip : false;
    this.leishmania = params ? params.leishmania : false;
    this.treatment = params ? params.treatment : false;
    this.inmunodeficiency = params ? params.inmunodeficiency  : false;
    this.leukemia = params ? params.leukemia : false;
    this.allergy = params ? params.allergy : false;
    this.allergies = params ? params.allergies : "";
    this.sociableKids = params ? params.sociableKids : false;
    this.sociablePeople = params ? params.sociablePeople  : false;
    this.sociableOtherAnimals = params  ? params.sociableOtherAnimals  : false;
    this.sociablePets = params ? params.sociablePets : false;
    this.independence = params ? params.independence : "";
    this.noisy = params ? params.noisy : "";
    this.adoptionReason = params ? params.adoptionReason : "";
    this.play = params ? params.play : false ;
    this.scape = params ? params.scape : false ;
    this.sleep = params ? params.sleep : false;
    this.bath = params ? params.bath : false;
    this.eat = params ? params.eat : false;
    this.takeAWalk = params ? params.takeAWalk : false;
    this.car = params ? params.car : false;
    this.getDescription();
    this.getPPP();
    this.getParasite();
    this.getParasite();
    this.getSterilized();
    this.getVaccined();
    this.getPrimer();
    this.getChip();
    this.getSociableWithKids();
    this.getSociableWithOtherAnimals();
    this.getSociableWithPeople();
    this.getSociableWithOtherPets();
    this.getTreatment();
    this.getLeukemia();
    this.getLeishmania();
    this.getInmunodecifiency();
    this.getAllergies();

  }
}
