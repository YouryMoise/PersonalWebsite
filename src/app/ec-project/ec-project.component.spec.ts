import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcProjectComponent } from './ec-project.component';

describe('EcProjectComponent', () => {
  let component: EcProjectComponent;
  let fixture: ComponentFixture<EcProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EcProjectComponent]
    });
    fixture = TestBed.createComponent(EcProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
