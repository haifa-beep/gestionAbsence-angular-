import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbscenceParComponent } from './abscence-par.component';

describe('AbscenceParComponent', () => {
  let component: AbscenceParComponent;
  let fixture: ComponentFixture<AbscenceParComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbscenceParComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbscenceParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
