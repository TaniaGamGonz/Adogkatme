import { Component, OnInit, Input, OnDestroy, Renderer2 } from "@angular/core";
import { ModalService } from "src/app/core/services/modal.service";
import { Subscription } from "rxjs";

@Component({
  selector: "modal",
  templateUrl: "./modal.component.html",
  styleUrls: [
    "./modal.component.scss",
    "../../login/login/login.component.scss"
  ]
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() public nombre: string;
  private isShow = false;
  private subscription: Subscription;

  constructor(
    private modalService: ModalService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.subscription = this.modalService.isShown$.subscribe(data => {
      if (data !== "" && data === this.nombre) {
        this.isShow = !this.isShow;
        if (!this.isShow) {
          this.renderer.removeClass(document.body, "over-hidden");
        } else {
          this.renderer.addClass(document.body, "over-hidden");
        }
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.modalService.isShown$.next("");
      this.subscription.unsubscribe();
    }
  }
}
