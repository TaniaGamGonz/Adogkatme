import { Component, OnInit } from "@angular/core";
import { LoginService } from '../../services/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(
    private loginService: LoginService,
  ) { }

  private isLogged: boolean;
  private loginSubscription: Subscription;
  private logged() {
    this.loginService.logged();
  }

  ngOnInit() {

    this.loginSubscription = this.loginService.isLogged$.subscribe(data =>{ this.isLogged = data});
    this.logged();
  }


}

