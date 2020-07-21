import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserSession } from '../models/userSession';
import { Router } from "@angular/router";



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private router: Router,

  ) { }
  public isLogged$ = new BehaviorSubject<boolean>(false);
  public user: UserSession = {
    name:'',
    id: '',
    logged: false,
  }
  public token: string;


 public signIn(user){
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization':  "Basic "+btoa(`${user.email}:${user.password}`),

    })};
  const body = JSON.stringify({"email":user.email,"password":user.password,"apiKeyToken":"f2a0f46b0f4804093193b6d5102e5ce5c60ab1d1f46ce94ace9328e9237dcab9"});
  const signInUrl = `${environment.apiUrl}${environment.signIn}`;
  return this.http.post(signInUrl, body, httpOptions);
 }

  public logged() {
    const user = this.user.logged;
    this.isLogged$.next( user ? true : false);
  }

  public clearLogin(){
    this.user = {
      name: '',
      id: '',
      logged: false
    }
    this.router.navigate(['/home'])
    this.logged();
  }



}
