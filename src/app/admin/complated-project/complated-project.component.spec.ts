import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplatedProjectComponent } from './complated-project.component';

describe('ComplatedProjectComponent', () => {
  let component: ComplatedProjectComponent;
  let fixture: ComponentFixture<ComplatedProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplatedProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplatedProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
