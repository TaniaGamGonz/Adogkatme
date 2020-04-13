import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
  ) { }
  public isLogged$ = new BehaviorSubject<boolean>(false);

 public signIn(user){
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization':  "Basic "+btoa(`${user.email}:${user.password}`),
      "Content-Type": "application/json; charset=utf-8"

    })
  };

  const body = JSON.stringify({"email":user.email,"password":user.password,"apiKeyToken":"f2a0f46b0f4804093193b6d5102e5ce5c60ab1d1f46ce94ace9328e9237dcab9"});


  const signInUrl = `${environment.apiUrl}${environment.signIn}`;
 return this.http.post(signInUrl, body, httpOptions);
 }

  public logged() {
    const user = localStorage.getItem("user");
    this.isLogged$.next((user && user !== "") ? true : false);
  }

  public clearLogin(){
    localStorage.clear();
    this.logged();
  }



}
