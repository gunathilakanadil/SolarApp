import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinverterComponent } from './addinverter.component';

describe('AddinverterComponent', () => {
  let component: AddinverterComponent;
  let fixture: ComponentFixture<AddinverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddinverterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddinverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
