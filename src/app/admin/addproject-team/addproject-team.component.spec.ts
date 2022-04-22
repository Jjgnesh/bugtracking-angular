import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprojectTeamComponent } from './addproject-team.component';

describe('AddprojectTeamComponent', () => {
  let component: AddprojectTeamComponent;
  let fixture: ComponentFixture<AddprojectTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprojectTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprojectTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
