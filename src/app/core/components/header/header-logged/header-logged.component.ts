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
  private name : string;
  private idProfile: string;


  private getName(){
    this.name = this.loginService.user.name;
   }
   private getIdProfile(){
     this.idProfile = this.loginService.user.id;
   }


  ngOnInit() {
    this.getIdProfile(),
    this.getName();

  }
  private showMenu(){
    this.isMenuShown = !(this.isMenuShown);
  }
  private clearLogin(){
    this.loginService.clearLogin();
  }




}
