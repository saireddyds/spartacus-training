import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTranslationsComponent } from './custom-translations.component';

describe('CustomTranslationsComponent', () => {
  let component: CustomTranslationsComponent;
  let fixture: ComponentFixture<CustomTranslationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomTranslationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTranslationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
