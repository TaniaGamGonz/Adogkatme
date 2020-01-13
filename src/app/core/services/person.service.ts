import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import { Observable, of } from 'rxjs';
import { PEOPLE } from './person-false';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  private people: Person[] = [];
  private person: Person;


  ngOnInit() {}

  public getPeople(): Observable<Person[]> {
    return of (PEOPLE);
  }
  public getPersonById(idPerson: number): Observable<Person> {
    console.log( PEOPLE);
    return of (Object.assign(new Person(), PEOPLE.find((person: Person) => idPerson === person.id)));
  }


}


