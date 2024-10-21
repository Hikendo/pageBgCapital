import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendimientoGraficaComponent } from './rendimiento-grafica.component';

describe('RendimientoGraficaComponent', () => {
  let component: RendimientoGraficaComponent;
  let fixture: ComponentFixture<RendimientoGraficaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RendimientoGraficaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RendimientoGraficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
