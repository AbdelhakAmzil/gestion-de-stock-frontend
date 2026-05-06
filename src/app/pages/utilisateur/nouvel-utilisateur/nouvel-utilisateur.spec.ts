import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelUtilisateur } from './nouvel-utilisateur';

describe('NouvelUtilisateur', () => {
  let component: NouvelUtilisateur;
  let fixture: ComponentFixture<NouvelUtilisateur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NouvelUtilisateur],
    }).compileComponents();

    fixture = TestBed.createComponent(NouvelUtilisateur);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
