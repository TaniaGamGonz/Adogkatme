export class User {

  name : string;
  email: string;
  password: string;
  country : any;
  city: any;
  photo: string;
  id: string;


  constructor(params) {
    this.name  = params.name ? params.name : "";
    this.email = params.email ? params.email : "";
    this.password = params.password ? params.password : "";
    this.country  = params.country ? params.country : "";
    this.city = params.city? params.city : "";
    this.photo = params.photo ? params.photo : "";
  }
}
