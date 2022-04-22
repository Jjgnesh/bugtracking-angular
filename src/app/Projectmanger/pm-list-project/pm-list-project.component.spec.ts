import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmListProjectComponent } from './pm-list-project.component';

describe('PmListProjectComponent', () => {
  let component: PmListProjectComponent;
  let fixture: ComponentFixture<PmListProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmListProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PmListProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
