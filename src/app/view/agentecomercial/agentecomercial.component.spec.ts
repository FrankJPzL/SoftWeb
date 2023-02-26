import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentecomercialComponent } from './agentecomercial.component';

describe('AgentecomercialComponent', () => {
  let component: AgentecomercialComponent;
  let fixture: ComponentFixture<AgentecomercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentecomercialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentecomercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
