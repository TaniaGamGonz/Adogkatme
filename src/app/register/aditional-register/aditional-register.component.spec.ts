import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AditionalRegisterComponent } from './aditional-register.component';

describe('AditionalRegisterComponent', () => {
  let component: AditionalRegisterComponent;
  let fixture: ComponentFixture<AditionalRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AditionalRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AditionalRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
