import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProtectiveComponent } from './register-protective.component';

describe('RegisterProtectiveComponent', () => {
  let component: RegisterProtectiveComponent;
  let fixture: ComponentFixture<RegisterProtectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterProtectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterProtectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
