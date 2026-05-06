import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProfil } from './page-profil';

describe('PageProfil', () => {
  let component: PageProfil;
  let fixture: ComponentFixture<PageProfil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageProfil],
    }).compileComponents();

    fixture = TestBed.createComponent(PageProfil);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
