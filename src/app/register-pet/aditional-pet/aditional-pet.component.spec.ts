import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AditionalPetComponent } from './aditional-pet.component';

describe('AditionalPetComponent', () => {
  let component: AditionalPetComponent;
  let fixture: ComponentFixture<AditionalPetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AditionalPetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AditionalPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
