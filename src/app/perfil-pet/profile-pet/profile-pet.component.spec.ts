import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePetComponent } from './profile-pet.component';

describe('ProfilePetComponent', () => {
  let component: ProfilePetComponent;
  let fixture: ComponentFixture<ProfilePetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
