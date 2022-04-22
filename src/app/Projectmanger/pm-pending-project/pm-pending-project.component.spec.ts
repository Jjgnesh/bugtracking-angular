import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmPendingProjectComponent } from './pm-pending-project.component';

describe('PmPendingProjectComponent', () => {
  let component: PmPendingProjectComponent;
  let fixture: ComponentFixture<PmPendingProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmPendingProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PmPendingProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
