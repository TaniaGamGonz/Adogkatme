import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/core/models/pet';

@Component({
  selector: 'app-sanitary-register',
  templateUrl: './sanitary-register.component.html',
  styleUrls: ['./sanitary-register.component.scss']
})
export class SanitaryRegisterComponent implements OnInit {

  constructor() { }

  private pet: Pet = new Pet;

  ngOnInit() {
  }

}
