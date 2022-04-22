import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmHeaderComponent } from './pm-header.component';

describe('PmHeaderComponent', () => {
  let component: PmHeaderComponent;
  let fixture: ComponentFixture<PmHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PmHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
