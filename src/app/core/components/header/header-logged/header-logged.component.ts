import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-logged',
  templateUrl: './header-logged.component.html',
  styleUrls: ['./header-logged.component.scss']
})
export class HeaderLoggedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  private isMenuShown: boolean = false;
  public showMenu(){
    this.isMenuShown = !(this.isMenuShown);
  }



}
