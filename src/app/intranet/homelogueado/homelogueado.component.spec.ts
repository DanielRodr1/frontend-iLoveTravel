import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomelogueadoComponent } from './homelogueado.component';

describe('HomelogueadoComponent', () => {
  let component: HomelogueadoComponent;
  let fixture: ComponentFixture<HomelogueadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomelogueadoComponent]
    });
    fixture = TestBed.createComponent(HomelogueadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
