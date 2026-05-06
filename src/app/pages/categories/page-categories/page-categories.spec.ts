import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCategories } from './page-categories';

describe('PageCategories', () => {
  let component: PageCategories;
  let fixture: ComponentFixture<PageCategories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageCategories],
    }).compileComponents();

    fixture = TestBed.createComponent(PageCategories);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
