import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNonFlexComponent } from './custom-non-flex.component';

describe('CustomNonFlexComponent', () => {
  let component: CustomNonFlexComponent;
  let fixture: ComponentFixture<CustomNonFlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomNonFlexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomNonFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
