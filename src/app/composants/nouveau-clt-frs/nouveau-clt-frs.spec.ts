import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauCltFrs } from './nouveau-clt-frs';

describe('NouveauCltFrs', () => {
  let component: NouveauCltFrs;
  let fixture: ComponentFixture<NouveauCltFrs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NouveauCltFrs],
    }).compileComponents();

    fixture = TestBed.createComponent(NouveauCltFrs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
