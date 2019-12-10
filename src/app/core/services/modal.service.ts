import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public isOpen = false;

  constructor() {

  }
  public isShown$ = new BehaviorSubject<string>('');

 //PAra varios modales, poner un nombre en cada modal y en vez de pasar true o false pasar el nombre de la modal a mostrar
  public toggleModal(modalName){
    this.isShown$.next(modalName);
  }




}
