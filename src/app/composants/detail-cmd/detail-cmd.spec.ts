import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCmd } from './detail-cmd';

describe('DetailCmd', () => {
  let component: DetailCmd;
  let fixture: ComponentFixture<DetailCmd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailCmd],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailCmd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
