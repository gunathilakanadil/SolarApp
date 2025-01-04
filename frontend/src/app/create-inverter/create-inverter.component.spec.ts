import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInverterComponent } from './create-inverter.component';

describe('CreateInverterComponent', () => {
  let component: CreateInverterComponent;
  let fixture: ComponentFixture<CreateInverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateInverterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateInverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
