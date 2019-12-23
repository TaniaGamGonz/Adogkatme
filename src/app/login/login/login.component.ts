import { Component, OnInit } from "@angular/core";
import { ModalService } from "src/app/core/services/modal.service";
import { Router } from "@angular/router";
import { User } from 'src/app/core/models/user';

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public login = new User;
  private password: string;
  private email: string;
  private passwordRegExp: RegExp= /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;



  constructor(
    private modalService: ModalService,
    private router: Router)
    { }
  ngOnInit() {}

  toggleModal() {
    this.modalService.toggleModal("loginModal");
  }

  onSubmit(email, password) {
    if (email.valid && password.valid) {
      localStorage.setItem("user", "token");
      this.router.navigate(["/"]);
    }
  }

  modalSubmit(email){
    if(email.valid){
      alert('Se te ha enviado un correo de verificacion');
    }
  }
}
