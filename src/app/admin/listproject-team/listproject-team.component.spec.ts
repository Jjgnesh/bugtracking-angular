import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListprojectTeamComponent } from './listproject-team.component';

describe('ListprojectTeamComponent', () => {
  let component: ListprojectTeamComponent;
  let fixture: ComponentFixture<ListprojectTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListprojectTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListprojectTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
