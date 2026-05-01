import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageArticles } from './page-articles';

describe('PageArticles', () => {
  let component: PageArticles;
  let fixture: ComponentFixture<PageArticles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageArticles],
    }).compileComponents();

    fixture = TestBed.createComponent(PageArticles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
