import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  constructor(private httpClient: HttpClient) { }

  getCities() {
   // return this.httpClient.get("https://5dcbbfc285d1960014615717.mockapi.io/cities");
  }

  getComunities() {

    return [];
  }

  getPets() {

    return [];
  }

  getPetById(id: number) {
    return {};
  }

  getUserById(id: number) {
    return {};
  }

  getProtectives() {

    return [];
  }

  getProtectivesById(id: number) {

    return {};
  }

}
