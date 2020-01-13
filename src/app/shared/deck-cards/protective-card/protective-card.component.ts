import { Component, OnInit, Input } from '@angular/core';
import { Protective } from 'src/app/core/models/protective';

@Component({
  selector: 'protective-card',
  templateUrl: './protective-card.component.html',
  styleUrls: ['./protective-card.component.scss', ]
})
export class ProtectiveCardComponent implements OnInit {
  @Input( ) protectora: Protective;

  constructor() { }

  ngOnInit() {
  }

}
