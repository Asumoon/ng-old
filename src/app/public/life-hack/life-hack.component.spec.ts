import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeHackComponent } from './life-hack.component';

describe('LifeHackComponent', () => {
  let component: LifeHackComponent;
  let fixture: ComponentFixture<LifeHackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeHackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeHackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
