import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestNewsTabComponent } from './latest-news-tab.component';

describe('LatestNewsTabComponent', () => {
  let component: LatestNewsTabComponent;
  let fixture: ComponentFixture<LatestNewsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestNewsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestNewsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
