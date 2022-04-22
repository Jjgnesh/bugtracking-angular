import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmCompletedProjectComponent } from './pm-completed-project.component';

describe('PmCompletedProjectComponent', () => {
  let component: PmCompletedProjectComponent;
  let fixture: ComponentFixture<PmCompletedProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmCompletedProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PmCompletedProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
