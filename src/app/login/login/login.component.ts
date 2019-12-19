import { Component, OnInit } from "@angular/core";
import { ModalService } from "src/app/core/services/modal.service";
import { Login } from "../models/login";
import { Router } from "@angular/router";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public login = new Login("", "");
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

  onSubmit() {
    if (this.email && this.password) {
      localStorage.setItem("user", "soemthing");
      this.router.navigate(["/"]);
    }
  }
}
