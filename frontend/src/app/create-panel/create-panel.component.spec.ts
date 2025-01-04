import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePanelComponent } from './create-panel.component';

describe('CreatePanelComponent', () => {
  let component: CreatePanelComponent;
  let fixture: ComponentFixture<CreatePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
