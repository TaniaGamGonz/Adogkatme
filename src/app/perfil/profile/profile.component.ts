import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private loginService: LoginService,
  ) { }
  private user: string;
  private isThisUser: boolean;
  private userId: string = "token";

  private thisUser(){
    this.user = localStorage.getItem("user");
    this.isThisUser = this.user === this.userId ? true : false ;
  }
  private clearLogin(){
    this.loginService.clearLogin();
    this.thisUser();
  }


  ngOnInit() {
    this.thisUser();
  }

}
