import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public isOpen = false;

  constructor() {

  }
  public isShown$ = new BehaviorSubject<string>('');

  public toggleModal(modalName: string){
    this.isShown$.next(modalName);
  }




}
