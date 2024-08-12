import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevtPageComponent } from './sevt-page.component';

describe('SevtPageComponent', () => {
  let component: SevtPageComponent;
  let fixture: ComponentFixture<SevtPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SevtPageComponent]
    });
    fixture = TestBed.createComponent(SevtPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
