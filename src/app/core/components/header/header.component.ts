import { Component, OnInit, OnDestroy } from "@angular/core";
import { LoginService } from '../../services/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(
    private loginService: LoginService,
  ) { }

  private isLogged: boolean;
  private loginSubscription: Subscription;


  ngOnInit() {

    this.loginSubscription = this.loginService.isLogged$.subscribe(data =>{
       this.isLogged = data
      });
  }

  ngOnDestroy(): void {
    this.loginSubscription.unsubscribe;
  }



}

