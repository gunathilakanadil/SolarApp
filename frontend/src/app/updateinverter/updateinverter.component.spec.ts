import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateinverterComponent } from './updateinverter.component';

describe('UpdateinverterComponent', () => {
  let component: UpdateinverterComponent;
  let fixture: ComponentFixture<UpdateinverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateinverterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateinverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
