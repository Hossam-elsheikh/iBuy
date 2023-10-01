import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadraComponent } from './madra.component';

describe('MadraComponent', () => {
  let component: MadraComponent;
  let fixture: ComponentFixture<MadraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MadraComponent]
    });
    fixture = TestBed.createComponent(MadraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
