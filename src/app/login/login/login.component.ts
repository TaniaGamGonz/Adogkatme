import { Component, OnInit, OnDestroy } from "@angular/core";
import { ModalService } from "src/app/core/services/modal.service";
import { Router } from "@angular/router";
import { User } from 'src/app/core/models/user';
import { LoginService } from 'src/app/core/services/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit, OnDestroy {
  public login;
  private password: string;
  private email: string;
  private subscriptionLogin: Subscription;
  private passwordRegExp: RegExp = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  public modalToken: string = 'loginModal';



  constructor(
    private modalService: ModalService,
    private router: Router,
    private loginService: LoginService)
    { }
  ngOnInit() {
    this.login = new User({});
  }

  toggleModal() {
    this.modalService.toggleModal(this.modalToken);
  }

  onSubmit(email, password) {
    const user = {
      email: this.login.email,
      password: this.login.password
    }
    if (email.valid && password.valid) {
 this.loginService.signIn(user).subscribe();
    }
  }

  modalSubmit(email){
    if(email.valid){
      alert('Se te ha enviado un correo de verificacion');
    }
  }

  ngOnDestroy(): void {
  }



}
