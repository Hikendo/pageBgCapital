import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartExample2Component } from './chart-example2.component';

describe('ChartExampleComponent', () => {
  let component: ChartExample2Component;
  let fixture: ComponentFixture<ChartExample2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartExample2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartExample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
