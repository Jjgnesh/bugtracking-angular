import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmAddUserComponent } from './pm-add-user.component';

describe('PmAddUserComponent', () => {
  let component: PmAddUserComponent;
  let fixture: ComponentFixture<PmAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmAddUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PmAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
