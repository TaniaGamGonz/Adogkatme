import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/core/services/pets.service';
import { Pet } from 'src/app/core/models/pet';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(
    private petService: PetsService,
    private route: ActivatedRoute,
  ) { }
  private optionAdopcion: Array<Object>;


  public pets$: Observable<Pet[]>;
  public selectedId: number;

  ngOnInit() {
    this.pets$ = this.petService.getPets();


    this.optionAdopcion = [
      {id: 1, itemName: "Adoptar"},
      {id: 2, itemName: "Acoger"},
      ]


  }


}
