import { Component, OnInit, OnDestroy } from "@angular/core";
import { ModalService } from "src/app/core/services/modal.service";
import { Router } from "@angular/router";
import { User } from 'src/app/core/models/user';
import { LoginService } from 'src/app/core/services/login.service';
import { Subscription } from 'rxjs';
import { SignInResponse } from '../../core/models/signInResponse'

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
  private loginError: boolean = false;



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
      this.loginService.signIn(user).subscribe(res =>{
        if(res)
         res = Object.assign(res, SignInResponse);
          this.loginService.user.name = res.user.name;
          this.loginService.user.id = res.user.id;
          this.loginService.user.logged = true;
          this.router.navigate(['/home'])
        },
        error => {
          if(error)
            this.loginError = true;
      });
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
