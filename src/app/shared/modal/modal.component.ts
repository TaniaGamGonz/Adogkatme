import { Component, OnInit, Input, OnDestroy, } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss', '../../login/login/login.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Input() public nombre: string;
  private isShow = false;
  private subscription: Subscription;

  constructor(
    private modalService : ModalService,
  ) { }


  ngOnInit() {
    // this.isShow = false;
    this.subscription = this.modalService.isShown$.subscribe(data => {
      debugger
      if (data !== '' && data === this.nombre) {
        this.isShow = !this.isShow;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

}
