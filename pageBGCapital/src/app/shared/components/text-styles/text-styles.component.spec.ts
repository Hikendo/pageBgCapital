import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextStylesComponent } from './text-styles.component';

describe('TextStylesComponent', () => {
  let component: TextStylesComponent;
  let fixture: ComponentFixture<TextStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextStylesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
