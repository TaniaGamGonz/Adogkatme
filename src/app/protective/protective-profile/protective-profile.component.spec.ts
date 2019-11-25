import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectiveProfileComponent } from './protective-profile.component';

describe('ProtectiveProfileComponent', () => {
  let component: ProtectiveProfileComponent;
  let fixture: ComponentFixture<ProtectiveProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtectiveProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectiveProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
