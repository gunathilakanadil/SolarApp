import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccesoriesComponent } from './update-accesories.component';

describe('UpdateAccesoriesComponent', () => {
  let component: UpdateAccesoriesComponent;
  let fixture: ComponentFixture<UpdateAccesoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateAccesoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAccesoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
