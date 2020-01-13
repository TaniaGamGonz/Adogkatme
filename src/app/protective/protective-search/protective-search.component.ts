import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Protective } from 'src/app/core/models/protective';
import { ProtectiveService } from 'src/app/core/services/protective.service';

@Component({
  selector: 'protective-search',
  templateUrl: './protective-search.component.html',
  styleUrls: ['./protective-search.component.scss']
})
export class ProtectiveSearchComponent implements OnInit {

  constructor(
    private protectiveService: ProtectiveService,
  ) { }

  private protectives$: Observable<Protective[]>

  ngOnInit() {

    this.protectives$ = this.protectiveService.getProtectives();
  }

}
