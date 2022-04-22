import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmEditProjectComponent } from './pm-edit-project.component';

describe('PmEditProjectComponent', () => {
  let component: PmEditProjectComponent;
  let fixture: ComponentFixture<PmEditProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmEditProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PmEditProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
