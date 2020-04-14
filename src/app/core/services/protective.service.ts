import { Injectable } from '@angular/core';
import { Protective } from '../models/protective';
import { Observable, of } from 'rxjs';
import { PROTECTIVES } from './protective-false';


@Injectable({
  providedIn: 'root'
})
export class ProtectiveService {

  constructor() { }

  private protectives: Protective[] = [];
  private protective: Protective;

  ngOnInit() {}

  public getProtectives(): Observable<Protective[]> {
    return of (PROTECTIVES);
  }
  public getProtectiveById(idProtective: string): Observable<Protective> {
    console.log( PROTECTIVES);
    return of (Object.assign(new Protective({}), PROTECTIVES.find((protective: Protective) => idProtective === protective.id)));
  }


}





