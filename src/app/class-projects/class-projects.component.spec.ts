import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassProjectsComponent } from './class-projects.component';

describe('ClassProjectsComponent', () => {
  let component: ClassProjectsComponent;
  let fixture: ComponentFixture<ClassProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassProjectsComponent]
    });
    fixture = TestBed.createComponent(ClassProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
