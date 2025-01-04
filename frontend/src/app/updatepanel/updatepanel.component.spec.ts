import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepanelComponent } from './updatepanel.component';

describe('UpdatepanelComponent', () => {
  let component: UpdatepanelComponent;
  let fixture: ComponentFixture<UpdatepanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatepanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
