import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import { Observable, of } from 'rxjs';
import { PEOPLE } from './person-false';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(
    private http: HttpClient,
  ) { }

  private people: Person[] = [];
  private person: Person;

  ngOnInit() {}

  public getPeople(): Observable<Person[]> {
    return of (PEOPLE);
  }

  public getPersonById(idPerson: number): Observable<Person> {
    return of (Object.assign(new Person({}), PEOPLE.find((person: Person) => idPerson === person.id)));
  }


  public createUser(person: Person){
    const personsUrl = `${environment.apiUrl}${environment.signUpResource}`;
   return this.http.post(personsUrl, person);
  }


}


