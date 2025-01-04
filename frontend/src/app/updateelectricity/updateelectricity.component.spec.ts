import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateelectricityComponent } from './updateelectricity.component';

describe('UpdateelectricityComponent', () => {
  let component: UpdateelectricityComponent;
  let fixture: ComponentFixture<UpdateelectricityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateelectricityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateelectricityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
