import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearMeComponent } from './near-me.component';

describe('NearMeComponent', () => {
  let component: NearMeComponent;
  let fixture: ComponentFixture<NearMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NearMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NearMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
