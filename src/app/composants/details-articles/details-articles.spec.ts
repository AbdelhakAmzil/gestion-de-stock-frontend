import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsArticles } from './details-articles';

describe('DetailsArticles', () => {
  let component: DetailsArticles;
  let fixture: ComponentFixture<DetailsArticles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsArticles],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsArticles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
