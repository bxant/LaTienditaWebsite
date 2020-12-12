import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CATSComponent } from './cats.component';

describe('CATSComponent', () => {
  let component: CATSComponent;
  let fixture: ComponentFixture<CATSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CATSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CATSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
