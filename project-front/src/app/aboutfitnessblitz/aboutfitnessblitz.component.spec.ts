import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutfitnessblitzComponent } from './aboutfitnessblitz.component';

describe('AboutfitnessblitzComponent', () => {
  let component: AboutfitnessblitzComponent;
  let fixture: ComponentFixture<AboutfitnessblitzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutfitnessblitzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutfitnessblitzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
