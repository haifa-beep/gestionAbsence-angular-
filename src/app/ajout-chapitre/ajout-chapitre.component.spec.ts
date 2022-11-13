import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutChapitreComponent } from './ajout-chapitre.component';

describe('AjoutChapitreComponent', () => {
  let component: AjoutChapitreComponent;
  let fixture: ComponentFixture<AjoutChapitreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutChapitreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutChapitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
