import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmAddModuleComponent } from './pm-add-module.component';

describe('PmAddModuleComponent', () => {
  let component: PmAddModuleComponent;
  let fixture: ComponentFixture<PmAddModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmAddModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PmAddModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
