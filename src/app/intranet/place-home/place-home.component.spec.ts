import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceHomeComponent } from './place-home.component';

describe('PlaceHomeComponent', () => {
  let component: PlaceHomeComponent;
  let fixture: ComponentFixture<PlaceHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceHomeComponent]
    });
    fixture = TestBed.createComponent(PlaceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
