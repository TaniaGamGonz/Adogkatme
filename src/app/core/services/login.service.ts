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
  const apiKeyToken = {"apiKeyToken" : "f2a0f46b0f4804093193b6d5102e5ce5c60ab1d1f46ce94ace9328e9237dcab9"};
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization':  [user.email , user.password ]
    })
  };
  const signInUrl = `${environment.apiUrl}${environment.signIn}`;
 return this.http.post(signInUrl, apiKeyToken, httpOptions);
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
