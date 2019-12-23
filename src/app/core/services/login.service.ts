import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public isLogged: boolean = false;
  public logged() {
    const user = localStorage.getItem("user");
    this.isLogged = (user && user !== "") ? true : false ;
  }

  public clearLogin(){
    localStorage.clear();
  }

}
