import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  private optionAdopcion: Array<Object>;

  ngOnInit() {
    this.optionAdopcion = [
      {id: 1, itemName: "Adoptar"},
      {id: 2, itemName: "Acoger"},
      ]

  }

}
