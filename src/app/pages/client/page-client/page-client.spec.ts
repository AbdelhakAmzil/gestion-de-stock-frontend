import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageClient } from './page-client';

describe('PageClient', () => {
  let component: PageClient;
  let fixture: ComponentFixture<PageClient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageClient],
    }).compileComponents();

    fixture = TestBed.createComponent(PageClient);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
