import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMvtStkArticle } from './detail-mvt-stk-article';

describe('DetailMvtStkArticle', () => {
  let component: DetailMvtStkArticle;
  let fixture: ComponentFixture<DetailMvtStkArticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailMvtStkArticle],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailMvtStkArticle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
