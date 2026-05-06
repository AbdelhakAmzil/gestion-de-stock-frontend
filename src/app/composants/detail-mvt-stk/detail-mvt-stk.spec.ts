import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMvtStk } from './detail-mvt-stk';

describe('DetailMvtStk', () => {
  let component: DetailMvtStk;
  let fixture: ComponentFixture<DetailMvtStk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailMvtStk],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailMvtStk);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
