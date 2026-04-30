import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStatistiques } from './page-statistiques';

describe('PageStatistiques', () => {
  let component: PageStatistiques;
  let fixture: ComponentFixture<PageStatistiques>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageStatistiques],
    }).compileComponents();

    fixture = TestBed.createComponent(PageStatistiques);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
