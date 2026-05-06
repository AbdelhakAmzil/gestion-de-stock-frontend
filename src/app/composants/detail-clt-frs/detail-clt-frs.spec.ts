import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCltFrs } from './detail-clt-frs';

describe('DetailCltFrs', () => {
  let component: DetailCltFrs;
  let fixture: ComponentFixture<DetailCltFrs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailCltFrs],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailCltFrs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
