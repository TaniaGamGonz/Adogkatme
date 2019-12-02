import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanitaryRegisterComponent } from './sanitary-register.component';

describe('SanitaryRegisterComponent', () => {
  let component: SanitaryRegisterComponent;
  let fixture: ComponentFixture<SanitaryRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanitaryRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanitaryRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
