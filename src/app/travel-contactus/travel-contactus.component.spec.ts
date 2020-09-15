import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelContactusComponent } from './travel-contactus.component';

describe('TravelContactusComponent', () => {
  let component: TravelContactusComponent;
  let fixture: ComponentFixture<TravelContactusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelContactusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelContactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
