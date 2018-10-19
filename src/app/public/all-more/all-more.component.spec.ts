import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMoreComponent } from './all-more.component';

describe('AllMoreComponent', () => {
  let component: AllMoreComponent;
  let fixture: ComponentFixture<AllMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
