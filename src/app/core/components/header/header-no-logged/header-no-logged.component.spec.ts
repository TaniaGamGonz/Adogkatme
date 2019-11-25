import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNoLoggedComponent } from './header-no-logged.component';

describe('HeaderNoLoggedComponent', () => {
  let component: HeaderNoLoggedComponent;
  let fixture: ComponentFixture<HeaderNoLoggedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderNoLoggedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNoLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
