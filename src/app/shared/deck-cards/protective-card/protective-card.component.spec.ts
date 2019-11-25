import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectiveCardComponent } from './protective-card.component';

describe('ProtectiveCardComponent', () => {
  let component: ProtectiveCardComponent;
  let fixture: ComponentFixture<ProtectiveCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtectiveCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectiveCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
