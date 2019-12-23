import { Component, OnInit } from "@angular/core";
import { LoginService } from '../../services/login.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(
    private loginService: LoginService,
  ) {}
  ngOnInit() {
    this.logged();
    this.isLogged = this.loginService.isLogged;
  }
  private isLogged: boolean;
  private logged() {
    this.loginService.logged();
  }


}

