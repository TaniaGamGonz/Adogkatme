import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectiveSearchComponent } from './protective-search.component';

describe('ProtectiveSearchComponent', () => {
  let component: ProtectiveSearchComponent;
  let fixture: ComponentFixture<ProtectiveSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtectiveSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectiveSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
