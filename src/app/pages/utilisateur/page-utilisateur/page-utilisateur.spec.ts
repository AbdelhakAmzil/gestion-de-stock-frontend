import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUtilisateur } from './page-utilisateur';

describe('PageUtilisateur', () => {
  let component: PageUtilisateur;
  let fixture: ComponentFixture<PageUtilisateur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageUtilisateur],
    }).compileComponents();

    fixture = TestBed.createComponent(PageUtilisateur);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
