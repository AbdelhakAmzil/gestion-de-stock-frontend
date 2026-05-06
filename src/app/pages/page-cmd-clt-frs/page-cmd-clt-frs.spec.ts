import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCmdCltFrs } from './page-cmd-clt-frs';

describe('PageCmdCltFrs', () => {
  let component: PageCmdCltFrs;
  let fixture: ComponentFixture<PageCmdCltFrs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageCmdCltFrs],
    }).compileComponents();

    fixture = TestBed.createComponent(PageCmdCltFrs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
