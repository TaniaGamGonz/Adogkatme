import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() {

  }
  public isShow$ = new BehaviorSubject<boolean>(false);

  public toggleModal(){
    this.isShow$.next(!this.isShow$.getValue())
  }




}
