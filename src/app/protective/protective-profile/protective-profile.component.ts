import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProtectiveService } from 'src/app/core/services/protective.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Protective } from 'src/app/core/models/protective';
import { Observable, Subscription } from 'rxjs';
import { Pet } from 'src/app/core/models/pet';
import { PetsService } from 'src/app/core/services/pets.service';

@Component({
  selector: 'protective-profile',
  templateUrl: './protective-profile.component.html',
  styleUrls: ['./protective-profile.component.scss']
})
export class ProtectiveProfileComponent implements OnInit, OnDestroy {

  constructor(
    private protectiveService: ProtectiveService,
    private petService: PetsService,
    private router: Router,
    private route: ActivatedRoute

  ) { }
  private protective$: Observable<Protective>;
  private subscriptionProtective: Subscription;
  public pets$: Observable<Pet[]>;




  ngOnInit() {
    this.protective$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.protectiveService.getProtectiveById(params.get('id')))
    );
    this.subscriptionProtective = this.protective$.subscribe( (protective: Protective) => {
      if(!protective){
        this.router.navigate(['/home']);
      }
    })
    this.pets$ = this.petService.getPets();
  }
  ngOnDestroy(): void {
    this.subscriptionProtective.unsubscribe();
  }


}
