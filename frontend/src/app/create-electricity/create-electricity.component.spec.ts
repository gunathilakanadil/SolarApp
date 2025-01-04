import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateElectricityComponent } from './create-electricity.component';

describe('CreateElectricityComponent', () => {
  let component: CreateElectricityComponent;
  let fixture: ComponentFixture<CreateElectricityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateElectricityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateElectricityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
