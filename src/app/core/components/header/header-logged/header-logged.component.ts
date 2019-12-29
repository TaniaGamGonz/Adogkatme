import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'header-logged',
  templateUrl: './header-logged.component.html',
  styleUrls: ['./header-logged.component.scss']
})
export class HeaderLoggedComponent implements OnInit {

  constructor(
    private loginService: LoginService,
  ) { }
  private isMenuShown: boolean = false;

  ngOnInit() {

  }
  private showMenu(){
    this.isMenuShown = !(this.isMenuShown);
  }
  private clearLogin(){
    this.loginService.clearLogin();
  }




}
