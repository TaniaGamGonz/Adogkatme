import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPetGeneralComponent } from './register-pet-general.component';

describe('RegisterPetGeneralComponent', () => {
  let component: RegisterPetGeneralComponent;
  let fixture: ComponentFixture<RegisterPetGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPetGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPetGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
