import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauCmdCltFrs } from './nouveau-cmd-clt-frs';

describe('NouveauCmdCltFrs', () => {
  let component: NouveauCmdCltFrs;
  let fixture: ComponentFixture<NouveauCmdCltFrs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NouveauCmdCltFrs],
    }).compileComponents();

    fixture = TestBed.createComponent(NouveauCmdCltFrs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
