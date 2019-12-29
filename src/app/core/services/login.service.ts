import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public isLogged$ = new BehaviorSubject<boolean>(false);
  public logged() {
    const user = localStorage.getItem("user");
    this.isLogged$.next((user && user !== "") ? true : false);
  }

  public clearLogin(){
    localStorage.clear();
    this.logged();
  }



}
