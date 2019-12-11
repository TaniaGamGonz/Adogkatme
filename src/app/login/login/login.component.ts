import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private modalService : ModalService,
  ) { }
  ngOnInit() {

  }

  toggleModal(){
    this.modalService.toggleModal('loginModal');
  }


}
