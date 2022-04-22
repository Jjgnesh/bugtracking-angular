import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmListModuleComponent } from './pm-list-module.component';

describe('PmListModuleComponent', () => {
  let component: PmListModuleComponent;
  let fixture: ComponentFixture<PmListModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmListModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PmListModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
