import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsAnTricksComponent } from './tips-an-tricks.component';

describe('TipsAnTricksComponent', () => {
  let component: TipsAnTricksComponent;
  let fixture: ComponentFixture<TipsAnTricksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipsAnTricksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsAnTricksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
