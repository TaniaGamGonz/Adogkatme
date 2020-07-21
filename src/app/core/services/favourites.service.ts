import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pet } from "../models/pet";
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: "root"
})
export class FavouritesService {
  constructor(
    private http: HttpClient,
  ) { }


  public getFavouritesById(idPerson: string): Observable<Pet[]> {
    const favsUrl = `${environment.apiUrl}${environment.userFavsResource}/${idPerson}`;
    return this.http.get<Pet[]>(favsUrl);
  }
  public setFavourites(idPerson: string, petId: string): Observable <String[]>{
    const favsUrl = `${environment.apiUrl}${environment.userFavsResource}/${idPerson}`;
    const body = JSON.stringify({ "petId" : petId });
    return this.http.put<String[]>(favsUrl, body)
  }


}
