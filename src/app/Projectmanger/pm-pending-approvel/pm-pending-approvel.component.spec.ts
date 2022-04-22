import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmPendingApprovelComponent } from './pm-pending-approvel.component';

describe('PmPendingApprovelComponent', () => {
  let component: PmPendingApprovelComponent;
  let fixture: ComponentFixture<PmPendingApprovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmPendingApprovelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PmPendingApprovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
