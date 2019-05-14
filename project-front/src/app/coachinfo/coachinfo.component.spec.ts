import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachinfoComponent } from './coachinfo.component';

describe('CoachinfoComponent', () => {
  let component: CoachinfoComponent;
  let fixture: ComponentFixture<CoachinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
