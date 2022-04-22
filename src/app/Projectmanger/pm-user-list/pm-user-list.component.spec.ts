import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmUserListComponent } from './pm-user-list.component';

describe('PmUserListComponent', () => {
  let component: PmUserListComponent;
  let fixture: ComponentFixture<PmUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmUserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PmUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
