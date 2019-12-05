import { Component, OnInit, } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss', '../../login/login/login.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(
    private modalService : ModalService,

  ) { }


  ngOnInit() {
  }
  private isShow: boolean ;
  private isShowed = this.modalService.isShow$.subscribe(data => this.isShow = data);

  toggleModal(){
    this.modalService.toggleModal();
  }

}
