import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkLoginComponent } from './park-login.component';

describe('ParkLoginComponent', () => {
  let component: ParkLoginComponent;
  let fixture: ComponentFixture<ParkLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
